document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("3260bf6d-c537-44bd-9292-6e182b0aaf43");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3260bf6d-c537-44bd-9292-6e182b0aaf43' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"fce6e295-38a9-4714-99f1-3d37d1f384d6":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0666df86-27c1-4373-ab2f-c2338e07e705","type":"ColumnDataSource"},{"attributes":{},"id":"245e2409-82b4-4a30-9532-787c79cdc9e5","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"db7fe70f-53c9-4bb7-b7e0-987b391b8377","type":"Plot"},"ticker":{"id":"fea59516-7d4c-4a12-98b0-ed2672762074","type":"BasicTicker"}},"id":"0b2dcae2-66d5-4301-82ba-9cf8ed55da7a","type":"Grid"},{"attributes":{"callback":null},"id":"afb9d89c-fa78-4b8e-b808-5654673e1c1d","type":"DataRange1d"},{"attributes":{"callback":null},"id":"5f59f4e7-185c-4e22-bfb5-efc1d11be2e7","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"236599a4-7bc4-4458-ba26-7394efe042e4","type":"Toolbar"},{"attributes":{},"id":"1727a0ce-c8a5-4691-98a9-15a9f046d8aa","type":"BasicTicker"},{"attributes":{},"id":"fea59516-7d4c-4a12-98b0-ed2672762074","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"750ded16-41fe-4d3e-8e0f-ccac764c737d","type":"Rect"},{"attributes":{"formatter":{"id":"eb4ef64f-8bc8-4e51-8536-8fbf9465e2dc","type":"BasicTickFormatter"},"plot":{"id":"db7fe70f-53c9-4bb7-b7e0-987b391b8377","type":"Plot"},"ticker":{"id":"1727a0ce-c8a5-4691-98a9-15a9f046d8aa","type":"BasicTicker"}},"id":"b0518de4-31ff-49ea-a12d-a72039938797","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0666df86-27c1-4373-ab2f-c2338e07e705","type":"ColumnDataSource"},"glyph":{"id":"750ded16-41fe-4d3e-8e0f-ccac764c737d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd32dd51-65a5-4755-a462-3f532ea40f9f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"245e2409-82b4-4a30-9532-787c79cdc9e5","type":"BasicTickFormatter"},"plot":{"id":"db7fe70f-53c9-4bb7-b7e0-987b391b8377","type":"Plot"},"ticker":{"id":"fea59516-7d4c-4a12-98b0-ed2672762074","type":"BasicTicker"}},"id":"43ac0fab-c2bd-4998-88b7-36712b63b524","type":"LinearAxis"},{"attributes":{},"id":"c95c0c66-73d3-4021-9bf7-8c09ce57d59d","type":"ToolEvents"},{"attributes":{"below":[{"id":"b0518de4-31ff-49ea-a12d-a72039938797","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"43ac0fab-c2bd-4998-88b7-36712b63b524","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dd32dd51-65a5-4755-a462-3f532ea40f9f","type":"GlyphRenderer"},{"id":"b0518de4-31ff-49ea-a12d-a72039938797","type":"LinearAxis"},{"id":"43ac0fab-c2bd-4998-88b7-36712b63b524","type":"LinearAxis"},{"id":"5092cbff-f555-4753-b74d-243d5479431e","type":"Grid"},{"id":"0b2dcae2-66d5-4301-82ba-9cf8ed55da7a","type":"Grid"}],"title":null,"tool_events":{"id":"c95c0c66-73d3-4021-9bf7-8c09ce57d59d","type":"ToolEvents"},"toolbar":{"id":"236599a4-7bc4-4458-ba26-7394efe042e4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5f59f4e7-185c-4e22-bfb5-efc1d11be2e7","type":"DataRange1d"},"y_range":{"id":"afb9d89c-fa78-4b8e-b808-5654673e1c1d","type":"DataRange1d"}},"id":"db7fe70f-53c9-4bb7-b7e0-987b391b8377","type":"Plot"},{"attributes":{},"id":"eb4ef64f-8bc8-4e51-8536-8fbf9465e2dc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"db7fe70f-53c9-4bb7-b7e0-987b391b8377","type":"Plot"},"ticker":{"id":"1727a0ce-c8a5-4691-98a9-15a9f046d8aa","type":"BasicTicker"}},"id":"5092cbff-f555-4753-b74d-243d5479431e","type":"Grid"}],"root_ids":["db7fe70f-53c9-4bb7-b7e0-987b391b8377"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"fce6e295-38a9-4714-99f1-3d37d1f384d6","elementid":"3260bf6d-c537-44bd-9292-6e182b0aaf43","modelid":"db7fe70f-53c9-4bb7-b7e0-987b391b8377"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});