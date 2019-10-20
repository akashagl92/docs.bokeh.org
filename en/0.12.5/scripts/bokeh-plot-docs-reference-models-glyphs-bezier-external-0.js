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
      };var element = document.getElementById("c9fabac1-74a5-4f31-93f0-5b4971ea049a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9fabac1-74a5-4f31-93f0-5b4971ea049a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"1509de91-72b1-4625-9475-4fad617084da":{"roots":{"references":[{"attributes":{"plot":{"id":"0bfe5995-270f-4223-8c73-d01d8e5177bd","type":"Plot"},"ticker":{"id":"d31e3534-b34d-43d7-8ee5-b33d5361ae7b","type":"BasicTicker"}},"id":"6e0bdc27-266d-4a60-b746-a514bfd66bdf","type":"Grid"},{"attributes":{},"id":"6858741c-fbe6-4f12-8164-561665297d8c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xp01","yp01","x","ym01","y","xp02","xm01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"b5e14f48-4fae-4c82-900a-9fa303204c7a","type":"ColumnDataSource"},{"attributes":{},"id":"d31e3534-b34d-43d7-8ee5-b33d5361ae7b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"13e48a70-9665-4ec9-ba34-78eb2067bdf4","type":"Toolbar"},{"attributes":{"below":[{"id":"e71933d9-6a0c-491b-b649-684262a1e78f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ebebcf47-7ab8-4e59-a77e-64dc82b4c11b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0dc71a01-8d71-48b3-9453-c225cdae77f4","type":"GlyphRenderer"},{"id":"e71933d9-6a0c-491b-b649-684262a1e78f","type":"LinearAxis"},{"id":"ebebcf47-7ab8-4e59-a77e-64dc82b4c11b","type":"LinearAxis"},{"id":"6e0bdc27-266d-4a60-b746-a514bfd66bdf","type":"Grid"},{"id":"0411abdb-437c-434e-8887-7d218f69673a","type":"Grid"}],"title":null,"tool_events":{"id":"e908abba-b6ed-4df2-8079-0d2f9b69e959","type":"ToolEvents"},"toolbar":{"id":"13e48a70-9665-4ec9-ba34-78eb2067bdf4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"656d7b5b-677a-466b-9538-50bf92260136","type":"DataRange1d"},"y_range":{"id":"a311ef9a-07e7-42a5-92fa-724272762df2","type":"DataRange1d"}},"id":"0bfe5995-270f-4223-8c73-d01d8e5177bd","type":"Plot"},{"attributes":{},"id":"672a6da1-4835-4a01-a9e5-563e70cc5025","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a311ef9a-07e7-42a5-92fa-724272762df2","type":"DataRange1d"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"6b681b5d-b71f-4690-9d22-c94afb5ba829","type":"Bezier"},{"attributes":{},"id":"e908abba-b6ed-4df2-8079-0d2f9b69e959","type":"ToolEvents"},{"attributes":{"formatter":{"id":"6858741c-fbe6-4f12-8164-561665297d8c","type":"BasicTickFormatter"},"plot":{"id":"0bfe5995-270f-4223-8c73-d01d8e5177bd","type":"Plot"},"ticker":{"id":"d31e3534-b34d-43d7-8ee5-b33d5361ae7b","type":"BasicTicker"}},"id":"e71933d9-6a0c-491b-b649-684262a1e78f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"656d7b5b-677a-466b-9538-50bf92260136","type":"DataRange1d"},{"attributes":{"formatter":{"id":"672a6da1-4835-4a01-a9e5-563e70cc5025","type":"BasicTickFormatter"},"plot":{"id":"0bfe5995-270f-4223-8c73-d01d8e5177bd","type":"Plot"},"ticker":{"id":"0df75903-39a9-418e-b827-c02c166760fd","type":"BasicTicker"}},"id":"ebebcf47-7ab8-4e59-a77e-64dc82b4c11b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b5e14f48-4fae-4c82-900a-9fa303204c7a","type":"ColumnDataSource"},"glyph":{"id":"6b681b5d-b71f-4690-9d22-c94afb5ba829","type":"Bezier"},"hover_glyph":null,"muted_glyph":null},"id":"0dc71a01-8d71-48b3-9453-c225cdae77f4","type":"GlyphRenderer"},{"attributes":{},"id":"0df75903-39a9-418e-b827-c02c166760fd","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0bfe5995-270f-4223-8c73-d01d8e5177bd","type":"Plot"},"ticker":{"id":"0df75903-39a9-418e-b827-c02c166760fd","type":"BasicTicker"}},"id":"0411abdb-437c-434e-8887-7d218f69673a","type":"Grid"}],"root_ids":["0bfe5995-270f-4223-8c73-d01d8e5177bd"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1509de91-72b1-4625-9475-4fad617084da","elementid":"c9fabac1-74a5-4f31-93f0-5b4971ea049a","modelid":"0bfe5995-270f-4223-8c73-d01d8e5177bd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
