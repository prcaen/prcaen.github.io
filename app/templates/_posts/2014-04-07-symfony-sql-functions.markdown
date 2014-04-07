---
layout: post
title:  "Use SQL functions with Doctrine 2 and Symfony 2"
date:   2014-01-08 15:38:41
categories: symfony
excerpt: How to use SQL functions with Doctrine 2 and Symfony 2?
---

In SQL you have functions like `CONCAT()` which allow you to concatenate two strings to form a single string.
In this tutorial I will show you how to do this with PostgreSQL and the function `string_agg()` with doctrine 2.

Let's do it:
{% highlight php %}
<?php

namespace Acme\DemoBundle\Query\Postgresql;

use Doctrine\ORM\Query\AST\Functions\FunctionNode;
use Doctrine\ORM\Query\Lexer;
use Doctrine\ORM\Query\Parser;
use Doctrine\ORM\Query\SqlWalker;

class StringAggFunction extends FunctionNode
{
    public function getSql(SqlWalker $sqlWalker)
    {
        return 'string_agg(' . $this->expression->dispatch($sqlWalker) . ',' . $this->delimiter->dispatch($sqlWalker) .')';
    }

    public function parse(Parser $parser)
    {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);
        $this->expression = $parser->ArithmeticPrimary();
        $parser->match(Lexer::T_COMMA);
        $this->delimiter = $parser->ArithmeticPrimary();
        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }
}
{% endhighlight %}

If you run this code this will not work because this functionnality is not available natively in Doctrine 2. It's necessary to create a doctrine extension to do that:

In `Acme\DemoBundle\Query\Postgresql` folder create a file named: `StringAggFunction.php` and put the code:
{% highlight php %}
<?php
$queryBuilder = $entityManager->getRepository('AcmeDemoBundle:Sample')->createQueryBuilder('s');

$queryBuilder->select(
  'partial s.{id}',
  "SELECT string_agg(sa.name, ',')
  FROM AcmeDemoBundle:AnotherSample sa
  WHERE sa.sample = s.id AS names"
')
{% endhighlight %}

Now we have to configure Symfony to use this new doctrine extension:
{% highlight yaml %}
doctrine:
  orm:
    dql:
      string_functions:
        string_agg: Acme\DemoBundle\Query\Postgresql\StringAggFunction
{% endhighlight %}

From now you will be able to this function in Doctrine.

P.
