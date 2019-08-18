(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("59e7e643-7325-4a61-9a54-31a0d44d4ec0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59e7e643-7325-4a61-9a54-31a0d44d4ec0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"64ce7d83-901a-4779-a32c-a69233b6bc65":{"roots":{"references":[{"attributes":{},"id":"2638cad2-b50f-4be8-9fe0-af3424139f85","type":"ToolEvents"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1216bd9-9ac8-43b6-bef1-f4967783b3ef","type":"AnnularWedge"},{"attributes":{"dimension":1,"plot":{"id":"0c0c6158-806f-402c-ae5e-8914fe4676b4","type":"Plot"},"ticker":{"id":"a1b09c45-0a01-4666-9a39-305d8f12f660","type":"BasicTicker"}},"id":"7babc29c-9a84-45a8-9120-cc3d8ca67d22","type":"Grid"},{"attributes":{"plot":{"id":"0c0c6158-806f-402c-ae5e-8914fe4676b4","type":"Plot"},"ticker":{"id":"131d3a9d-7419-40bc-8bed-266d8665f31c","type":"BasicTicker"}},"id":"1618c2a9-bc95-423b-a554-8f003bcfd58c","type":"Grid"},{"attributes":{},"id":"3a0c8eab-3a37-4bf4-b848-47442e92aef2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","r","y"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e2ab2c56-f392-4f63-a706-0f84a7e43f1d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3a0c8eab-3a37-4bf4-b848-47442e92aef2","type":"BasicTickFormatter"},"plot":{"id":"0c0c6158-806f-402c-ae5e-8914fe4676b4","type":"Plot"},"ticker":{"id":"131d3a9d-7419-40bc-8bed-266d8665f31c","type":"BasicTicker"}},"id":"9accf4bf-2a0f-4775-ad33-cb43150ef898","type":"LinearAxis"},{"attributes":{},"id":"131d3a9d-7419-40bc-8bed-266d8665f31c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"e2ab2c56-f392-4f63-a706-0f84a7e43f1d","type":"ColumnDataSource"},"glyph":{"id":"b1216bd9-9ac8-43b6-bef1-f4967783b3ef","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6886c6ed-df0e-43a9-887c-0fca07957880","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"68b73e14-c6f9-42da-be51-94a8000a24f8","type":"DataRange1d"},{"attributes":{"below":[{"id":"9accf4bf-2a0f-4775-ad33-cb43150ef898","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f0806df0-6a63-47fd-8c5d-ab88024b9439","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6886c6ed-df0e-43a9-887c-0fca07957880","type":"GlyphRenderer"},{"id":"9accf4bf-2a0f-4775-ad33-cb43150ef898","type":"LinearAxis"},{"id":"f0806df0-6a63-47fd-8c5d-ab88024b9439","type":"LinearAxis"},{"id":"1618c2a9-bc95-423b-a554-8f003bcfd58c","type":"Grid"},{"id":"7babc29c-9a84-45a8-9120-cc3d8ca67d22","type":"Grid"}],"title":null,"tool_events":{"id":"2638cad2-b50f-4be8-9fe0-af3424139f85","type":"ToolEvents"},"toolbar":{"id":"356b0c12-8f07-44de-beef-7affe6bd3333","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"68b73e14-c6f9-42da-be51-94a8000a24f8","type":"DataRange1d"},"y_range":{"id":"02567b43-878f-446e-8fa1-22c4d0cda4aa","type":"DataRange1d"}},"id":"0c0c6158-806f-402c-ae5e-8914fe4676b4","type":"Plot"},{"attributes":{},"id":"3dfea356-6282-4db5-8092-d5ba7327d56c","type":"BasicTickFormatter"},{"attributes":{},"id":"a1b09c45-0a01-4666-9a39-305d8f12f660","type":"BasicTicker"},{"attributes":{"callback":null},"id":"02567b43-878f-446e-8fa1-22c4d0cda4aa","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3dfea356-6282-4db5-8092-d5ba7327d56c","type":"BasicTickFormatter"},"plot":{"id":"0c0c6158-806f-402c-ae5e-8914fe4676b4","type":"Plot"},"ticker":{"id":"a1b09c45-0a01-4666-9a39-305d8f12f660","type":"BasicTicker"}},"id":"f0806df0-6a63-47fd-8c5d-ab88024b9439","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"356b0c12-8f07-44de-beef-7affe6bd3333","type":"Toolbar"}],"root_ids":["0c0c6158-806f-402c-ae5e-8914fe4676b4"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"64ce7d83-901a-4779-a32c-a69233b6bc65","elementid":"59e7e643-7325-4a61-9a54-31a0d44d4ec0","modelid":"0c0c6158-806f-402c-ae5e-8914fe4676b4"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
