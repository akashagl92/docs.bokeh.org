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
      };var element = document.getElementById("532972d4-cfa6-4b43-a5ed-23b7f63b77b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '532972d4-cfa6-4b43-a5ed-23b7f63b77b2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"1e6044d1-a1c0-440e-a7b3-abb182a3cc47":{"roots":{"references":[{"attributes":{"callback":null},"id":"e0d2e6b4-048b-498e-804c-75688e78254c","type":"DataRange1d"},{"attributes":{"plot":{"id":"13cd572d-440a-4eb1-b4a1-ef46ff077262","type":"Plot"},"ticker":{"id":"4568e7f9-0bf7-4c66-94e4-d5b5a4ce33dd","type":"BasicTicker"}},"id":"f9b788ad-fd53-40f9-abe6-08caab937d9a","type":"Grid"},{"attributes":{"formatter":{"id":"6d7100c7-9ca9-4878-92ad-e6a19cd36578","type":"BasicTickFormatter"},"plot":{"id":"13cd572d-440a-4eb1-b4a1-ef46ff077262","type":"Plot"},"ticker":{"id":"4568e7f9-0bf7-4c66-94e4-d5b5a4ce33dd","type":"BasicTicker"}},"id":"e02b5859-6703-436a-b5c6-600f559e4083","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"dac32be3-2dbe-4cc0-b204-99734d8dd735","type":"Toolbar"},{"attributes":{"below":[{"id":"e02b5859-6703-436a-b5c6-600f559e4083","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"59da22c3-dfdb-407f-8cd5-06750f6653ff","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9c2551f8-f07d-440d-a95c-41b6d765bde7","type":"GlyphRenderer"},{"id":"e02b5859-6703-436a-b5c6-600f559e4083","type":"LinearAxis"},{"id":"59da22c3-dfdb-407f-8cd5-06750f6653ff","type":"LinearAxis"},{"id":"f9b788ad-fd53-40f9-abe6-08caab937d9a","type":"Grid"},{"id":"9d863ac1-2819-49ce-a279-3d64dc19b4a2","type":"Grid"}],"title":null,"toolbar":{"id":"dac32be3-2dbe-4cc0-b204-99734d8dd735","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e0d2e6b4-048b-498e-804c-75688e78254c","type":"DataRange1d"},"x_scale":{"id":"3e18ce6b-0b28-45b7-9121-caed19a9f7ca","type":"LinearScale"},"y_range":{"id":"4528ab5c-bbdd-4706-971a-c1163b0fd8b6","type":"DataRange1d"},"y_scale":{"id":"6f4c0ae8-fa0f-46f5-a202-81a857acc359","type":"LinearScale"}},"id":"13cd572d-440a-4eb1-b4a1-ef46ff077262","type":"Plot"},{"attributes":{},"id":"3e18ce6b-0b28-45b7-9121-caed19a9f7ca","type":"LinearScale"},{"attributes":{},"id":"4568e7f9-0bf7-4c66-94e4-d5b5a4ce33dd","type":"BasicTicker"},{"attributes":{},"id":"6f4c0ae8-fa0f-46f5-a202-81a857acc359","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"13cd572d-440a-4eb1-b4a1-ef46ff077262","type":"Plot"},"ticker":{"id":"4f57ad00-afb6-43f0-a24b-7102b1882da8","type":"BasicTicker"}},"id":"9d863ac1-2819-49ce-a279-3d64dc19b4a2","type":"Grid"},{"attributes":{"formatter":{"id":"11fd1c76-4c24-44bf-8ffb-900e74dc2444","type":"BasicTickFormatter"},"plot":{"id":"13cd572d-440a-4eb1-b4a1-ef46ff077262","type":"Plot"},"ticker":{"id":"4f57ad00-afb6-43f0-a24b-7102b1882da8","type":"BasicTicker"}},"id":"59da22c3-dfdb-407f-8cd5-06750f6653ff","type":"LinearAxis"},{"attributes":{},"id":"6d7100c7-9ca9-4878-92ad-e6a19cd36578","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"e1a764a5-35ca-4696-9e08-e13852ec2835","type":"ColumnDataSource"}},"id":"cb6ae1f5-d9e1-4881-a598-1d408aa181d2","type":"CDSView"},{"attributes":{"data_source":{"id":"e1a764a5-35ca-4696-9e08-e13852ec2835","type":"ColumnDataSource"},"glyph":{"id":"23d54a22-eb72-4f70-962c-d38990c2fb76","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"cb6ae1f5-d9e1-4881-a598-1d408aa181d2","type":"CDSView"}},"id":"9c2551f8-f07d-440d-a95c-41b6d765bde7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"e1a764a5-35ca-4696-9e08-e13852ec2835","type":"ColumnDataSource"},{"attributes":{},"id":"11fd1c76-4c24-44bf-8ffb-900e74dc2444","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"23d54a22-eb72-4f70-962c-d38990c2fb76","type":"Ellipse"},{"attributes":{},"id":"4f57ad00-afb6-43f0-a24b-7102b1882da8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4528ab5c-bbdd-4706-971a-c1163b0fd8b6","type":"DataRange1d"}],"root_ids":["13cd572d-440a-4eb1-b4a1-ef46ff077262"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"1e6044d1-a1c0-440e-a7b3-abb182a3cc47","elementid":"532972d4-cfa6-4b43-a5ed-23b7f63b77b2","modelid":"13cd572d-440a-4eb1-b4a1-ef46ff077262"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
