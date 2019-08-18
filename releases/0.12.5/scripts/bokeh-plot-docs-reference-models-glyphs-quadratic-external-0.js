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
      };var element = document.getElementById("9b5df331-4ac6-41d9-ab49-7b675fb4846c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b5df331-4ac6-41d9-ab49-7b675fb4846c' but no matching script tag was found. ")
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
                var docs_json = {"fafe4752-b1ca-4549-b473-ad742c8cef46":{"roots":{"references":[{"attributes":{"data_source":{"id":"fd1c457c-8584-42e1-8617-73cb8b0d3c3f","type":"ColumnDataSource"},"glyph":{"id":"d5d51dfa-6436-4d8c-bd3b-56a51978a093","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null},"id":"5953bfc3-f461-4ed1-ab23-096b93d6b5bc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cf596eb2-9af7-4c33-ac4e-c8bf7d66d726","type":"Toolbar"},{"attributes":{"formatter":{"id":"900f7b56-ba67-44d2-b177-7de6dde81d40","type":"BasicTickFormatter"},"plot":{"id":"05d71a7f-85de-4cbd-9487-c86539a77d06","type":"Plot"},"ticker":{"id":"b5348458-ee82-4710-a117-09229fe36228","type":"BasicTicker"}},"id":"7e5fcdad-d152-4738-990a-c314cf3e872f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4c3e199c-d234-44b8-bd77-d28b03c4fdc4","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"05d71a7f-85de-4cbd-9487-c86539a77d06","type":"Plot"},"ticker":{"id":"b5348458-ee82-4710-a117-09229fe36228","type":"BasicTicker"}},"id":"5fd1b384-4f1d-40d6-9ca0-a50c9edfac2f","type":"Grid"},{"attributes":{"below":[{"id":"d7cada5b-8d48-40f4-8b89-2e55455b250b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7e5fcdad-d152-4738-990a-c314cf3e872f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5953bfc3-f461-4ed1-ab23-096b93d6b5bc","type":"GlyphRenderer"},{"id":"d7cada5b-8d48-40f4-8b89-2e55455b250b","type":"LinearAxis"},{"id":"7e5fcdad-d152-4738-990a-c314cf3e872f","type":"LinearAxis"},{"id":"bbe3dc57-36bb-42d1-91f3-1f644771e978","type":"Grid"},{"id":"5fd1b384-4f1d-40d6-9ca0-a50c9edfac2f","type":"Grid"}],"title":null,"tool_events":{"id":"a70f3eb0-3f78-48bf-ab75-3272dfb986f0","type":"ToolEvents"},"toolbar":{"id":"cf596eb2-9af7-4c33-ac4e-c8bf7d66d726","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b44709bb-b9e5-4cec-92e2-4508acc52ce7","type":"DataRange1d"},"y_range":{"id":"4c3e199c-d234-44b8-bd77-d28b03c4fdc4","type":"DataRange1d"}},"id":"05d71a7f-85de-4cbd-9487-c86539a77d06","type":"Plot"},{"attributes":{"callback":null,"column_names":["yp01","x","xp01","xp02","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"fd1c457c-8584-42e1-8617-73cb8b0d3c3f","type":"ColumnDataSource"},{"attributes":{},"id":"a70f3eb0-3f78-48bf-ab75-3272dfb986f0","type":"ToolEvents"},{"attributes":{},"id":"b9c0353c-c2cd-4f25-bdae-69ce8044a09d","type":"BasicTicker"},{"attributes":{},"id":"d223920f-5803-4c62-9987-576c438f1a94","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d223920f-5803-4c62-9987-576c438f1a94","type":"BasicTickFormatter"},"plot":{"id":"05d71a7f-85de-4cbd-9487-c86539a77d06","type":"Plot"},"ticker":{"id":"b9c0353c-c2cd-4f25-bdae-69ce8044a09d","type":"BasicTicker"}},"id":"d7cada5b-8d48-40f4-8b89-2e55455b250b","type":"LinearAxis"},{"attributes":{},"id":"900f7b56-ba67-44d2-b177-7de6dde81d40","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"05d71a7f-85de-4cbd-9487-c86539a77d06","type":"Plot"},"ticker":{"id":"b9c0353c-c2cd-4f25-bdae-69ce8044a09d","type":"BasicTicker"}},"id":"bbe3dc57-36bb-42d1-91f3-1f644771e978","type":"Grid"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"d5d51dfa-6436-4d8c-bd3b-56a51978a093","type":"Quadratic"},{"attributes":{},"id":"b5348458-ee82-4710-a117-09229fe36228","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b44709bb-b9e5-4cec-92e2-4508acc52ce7","type":"DataRange1d"}],"root_ids":["05d71a7f-85de-4cbd-9487-c86539a77d06"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fafe4752-b1ca-4549-b473-ad742c8cef46","elementid":"9b5df331-4ac6-41d9-ab49-7b675fb4846c","modelid":"05d71a7f-85de-4cbd-9487-c86539a77d06"}];
                
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
