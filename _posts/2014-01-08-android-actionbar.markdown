---
layout: post
title:  "The Android ActionBar"
date:   2014-01-08 15:38:41
categories: blog, android
excerpt: This article will give you some tips about Android ActionBar
---

<p class="align-center">
  <img src="/images/blog/android_action_bar.jpg" alt="ActionBar">
</p>

The Android **Action Bar** was introduced in Android 3.0 (Honeycomb - API level 11). This bar allows users to view the application name and the icon in the left area and action items at the right.

In 07 august 2013, Google Android developers released a new backward-compatible Action Bar called ActionBarCompat ([http://goo.gl/aBzOmK][blog-post]). It allow to backport the ActionBar on Android 2.1 (Eclair - API level 9).

As you can see on the post picture, at the left of the App icon, there are three small horizontal bars. This is the official sidebar and Google call Navigation Drawer.

The Android developers documentation explain how you can implement the Navigation Drawer here: [http://goo.gl/phAJy][navigation-drawer]

Today, I will give you two tips about the ActionBar and the NavigationDrawer:

## How make the ActionBar title clickable on Android under API 11
{% highlight java %}
private static final boolean API_LEVEL_UNDER_11 = android.os.Build.VERSION.SDK_INT < 11;
private boolean navigationDrawerEnabled = true; // Useful if your app need navigation drawer

@Override
protected void onCreate(Bundle savedInstanceState) {
  if (API_LEVEL_UNDER_11) {
    getSupportActionBar().setCustomView(R.layout.partial_actionbar);
    getSupportActionBar().setDisplayShowCustomEnabled(true);
    ((TextView) getSupportActionBar().getCustomView().findViewById(R.id.action_bar_text)).setText(title);
  } else {
    getSupportActionBar().setTitle(title);
  }
  getSupportActionBar().setDisplayHomeAsUpEnabled(true);
  getSupportActionBar().setHomeButtonEnabled(true);
}

...

public void onClickTitle(View v) {
  if (navigationDrawerEnabled) {
    toggleDrawer();
  } else {
    finish();
  }
}
{% endhighlight %}

{% highlight xml %}
<LinearLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="match_parent" >

  <TextView
      android:id="@+id/action_bar_text"
      android:layout_width="wrap_content"
      android:layout_height="match_parent"
      android:background="@drawable/action_bar"
      android:clickable="true"
      android:gravity="center_vertical"
      android:onClick="onClickTitle"
      android:paddingLeft="5dp"
      android:paddingRight="5dp"
      android:text="@string/app_name"
      android:textSize="21sp" />
</LinearLayout>
{% endhighlight %}

## How customize the SearchView in the ActionBar. In your activity
{% highlight java %}
import android.support.v4.view.MenuItemCompat;
import android.support.v7.widget.SearchView;
import android.support.v7.widget.SearchView.SearchAutoComplete;
...

@Override
public boolean onCreateOptionsMenu(Menu menu) {
  getMenuInflater().inflate(R.menu.menu_home, menu);
  MenuItem searchItem = menu.findItem(R.id.item_search);
  mSearchView = (SearchView) MenuItemCompat.getActionView(searchItem);
  mSearchView.setOnQueryTextListener(this);
  mSearchView.setQueryHint(getString(R.string.text));
  SearchAutoComplete searchAutoComplete = (SearchAutoComplete) mSearchView.findViewById(android.support.v7.appcompat.R.id.search_src_text);
  searchAutoComplete.setHintTextColor(mRes.getColor(android.R.color.white));
  searchAutoComplete.setTextSize(14);
  return super.onCreateOptionsMenu(menu);
}
{% endhighlight %}

If I find more tips, I will edit this article.
I really hope you will find this article useful.
P.﻿

[blog-post]: http://goo.gl/aBzOmK
[navigation-drawer]: http://goo.gl/phAJy
