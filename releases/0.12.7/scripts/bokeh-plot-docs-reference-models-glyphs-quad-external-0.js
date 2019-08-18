(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("e2f21d92-11d9-4e5e-82b8-f10aecb6a292");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2f21d92-11d9-4e5e-82b8-f10aecb6a292' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"889f7d18-f8d8-4b2f-9cf0-73cadba6f877":{"roots":{"references":[{"attributes":{},"id":"8685405e-5e15-4d35-99e5-d46f664bb7f4","type":"LinearScale"},{"attributes":{},"id":"4186580e-b3ad-4c1e-a186-96e30209a57f","type":"BasicTicker"},{"attributes":{},"id":"6df2c0b1-4dfa-47e9-a02a-9e2042a11840","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["left","top","right","bottom"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"7a7baa32-4561-4860-9740-9017eb7b1710","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd","type":"Plot"},"ticker":{"id":"4186580e-b3ad-4c1e-a186-96e30209a57f","type":"BasicTicker"}},"id":"8635a857-826e-4721-998c-5149662d78dd","type":"Grid"},{"attributes":{"formatter":{"id":"4463ec6f-c0c1-4a7f-9b12-08893abd413b","type":"BasicTickFormatter"},"plot":{"id":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd","type":"Plot"},"ticker":{"id":"4186580e-b3ad-4c1e-a186-96e30209a57f","type":"BasicTicker"}},"id":"e025b4d5-aaf3-44a4-81be-b323b42b78a2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fe51bdeb-816a-475e-8153-3292bfbc7302","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd","type":"Plot"},"ticker":{"id":"a0ad3c7e-9523-461f-a376-c70af8f3f446","type":"BasicTicker"}},"id":"9eccb07e-08a4-469d-95b5-4cc84951971e","type":"Grid"},{"attributes":{"callback":null},"id":"7f23c342-bc18-4e8a-9b1f-7f93017be464","type":"DataRange1d"},{"attributes":{"source":{"id":"7a7baa32-4561-4860-9740-9017eb7b1710","type":"ColumnDataSource"}},"id":"29a790d8-d0fd-49ea-a986-f2d177e16d68","type":"CDSView"},{"attributes":{},"id":"4463ec6f-c0c1-4a7f-9b12-08893abd413b","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"bfb507a4-e93a-4c65-88c3-6386219188f8","type":"Quad"},{"attributes":{"formatter":{"id":"eaa9306f-3ab3-4fab-aa34-b87cf49350ee","type":"BasicTickFormatter"},"plot":{"id":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd","type":"Plot"},"ticker":{"id":"a0ad3c7e-9523-461f-a376-c70af8f3f446","type":"BasicTicker"}},"id":"51569e6b-aa5c-4faa-a3f5-f68ca25ea1df","type":"LinearAxis"},{"attributes":{"below":[{"id":"e025b4d5-aaf3-44a4-81be-b323b42b78a2","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"51569e6b-aa5c-4faa-a3f5-f68ca25ea1df","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d135cd28-db85-4816-88da-8db82a94e9d0","type":"GlyphRenderer"},{"id":"e025b4d5-aaf3-44a4-81be-b323b42b78a2","type":"LinearAxis"},{"id":"51569e6b-aa5c-4faa-a3f5-f68ca25ea1df","type":"LinearAxis"},{"id":"8635a857-826e-4721-998c-5149662d78dd","type":"Grid"},{"id":"9eccb07e-08a4-469d-95b5-4cc84951971e","type":"Grid"}],"title":null,"toolbar":{"id":"d9d4c5a8-2093-4e7d-84d4-4dbad5913d0c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7f23c342-bc18-4e8a-9b1f-7f93017be464","type":"DataRange1d"},"x_scale":{"id":"8685405e-5e15-4d35-99e5-d46f664bb7f4","type":"LinearScale"},"y_range":{"id":"fe51bdeb-816a-475e-8153-3292bfbc7302","type":"DataRange1d"},"y_scale":{"id":"6df2c0b1-4dfa-47e9-a02a-9e2042a11840","type":"LinearScale"}},"id":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd","type":"Plot"},{"attributes":{},"id":"a0ad3c7e-9523-461f-a376-c70af8f3f446","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7a7baa32-4561-4860-9740-9017eb7b1710","type":"ColumnDataSource"},"glyph":{"id":"bfb507a4-e93a-4c65-88c3-6386219188f8","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29a790d8-d0fd-49ea-a986-f2d177e16d68","type":"CDSView"}},"id":"d135cd28-db85-4816-88da-8db82a94e9d0","type":"GlyphRenderer"},{"attributes":{},"id":"eaa9306f-3ab3-4fab-aa34-b87cf49350ee","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d9d4c5a8-2093-4e7d-84d4-4dbad5913d0c","type":"Toolbar"}],"root_ids":["5c7635ed-71ae-41d9-b4f9-73f6287cf9dd"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"889f7d18-f8d8-4b2f-9cf0-73cadba6f877","elementid":"e2f21d92-11d9-4e5e-82b8-f10aecb6a292","modelid":"5c7635ed-71ae-41d9-b4f9-73f6287cf9dd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
