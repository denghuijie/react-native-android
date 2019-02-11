package com.example.dhj.rnandroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.FragmentActivity;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class ReactPageActivity extends ReactActivity{
    private static String moduleName;
    public static void start(Activity activity, String moduleName){
        ReactPageActivity.moduleName = moduleName;
        Intent intent = new Intent(activity, ReactPageActivity.class);
        activity.startActivity(intent);
    }

    @Override
    protected String getMainComponentName() {
        return moduleName;
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new MyreactDelegate(this, getMainComponentName());
    }
    class MyreactDelegate extends ReactActivityDelegate {

        public MyreactDelegate(Activity activity,    @Nullable String mainComponentName) {
            super(activity, mainComponentName);
        }
        @Nullable
        @Override
        protected Bundle getLaunchOptions() {
            Bundle bundle = new Bundle();
            bundle.putString("fromtag", "C");
            bundle.putString("data3", "android传递的初始化参数");
            return bundle;
        }
    }
}
