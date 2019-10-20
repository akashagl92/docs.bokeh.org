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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("c412f62b-c110-4bd8-883e-29a5439b5254");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c412f62b-c110-4bd8-883e-29a5439b5254' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"f5ad0226-e9fe-49a5-b336-414bc73355d5":{"roots":{"references":[{"attributes":{},"id":"faa853a7-fbc6-4d76-a329-5b1097947320","type":"BasicTicker"},{"attributes":{"below":[{"id":"62f0a806-c539-4608-a240-b34f09c569db","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"23208965-0818-40c0-b8c1-313334bccf3b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4c86cdbf-07e2-472e-821d-89fe276a2d17","type":"GlyphRenderer"},{"id":"62f0a806-c539-4608-a240-b34f09c569db","type":"LinearAxis"},{"id":"23208965-0818-40c0-b8c1-313334bccf3b","type":"LinearAxis"},{"id":"c3b7e9b1-a3a1-48cf-834b-cb3275f5ebc2","type":"Grid"},{"id":"720eab90-1141-4691-830b-d1c460327ec5","type":"Grid"}],"title":null,"tool_events":{"id":"b76f5340-a73a-40ce-8789-85b014f2f3f1","type":"ToolEvents"},"toolbar":{"id":"980f4a38-9c75-4770-9033-c28f1025ec1b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ca217a70-843a-4e67-9220-f6f0a6a9929c","type":"DataRange1d"},"x_scale":{"id":"33bee934-72dc-49a9-a4c6-4dce7069e0dd","type":"LinearScale"},"y_range":{"id":"24fd26ba-922d-45bf-a539-3c24e82c8da7","type":"DataRange1d"},"y_scale":{"id":"f4a29fc4-b7b5-484d-bfb2-fd6f99e76e35","type":"LinearScale"}},"id":"bd7f3534-703d-4008-ad7c-d601e3ee82fb","type":"Plot"},{"attributes":{"formatter":{"id":"efd75541-6cc5-47f0-b57e-1aefd3886f32","type":"BasicTickFormatter"},"plot":{"id":"bd7f3534-703d-4008-ad7c-d601e3ee82fb","type":"Plot"},"ticker":{"id":"f23cf561-2210-48ea-863f-dd38657b08fb","type":"BasicTicker"}},"id":"23208965-0818-40c0-b8c1-313334bccf3b","type":"LinearAxis"},{"attributes":{"plot":{"id":"bd7f3534-703d-4008-ad7c-d601e3ee82fb","type":"Plot"},"ticker":{"id":"faa853a7-fbc6-4d76-a329-5b1097947320","type":"BasicTicker"}},"id":"c3b7e9b1-a3a1-48cf-834b-cb3275f5ebc2","type":"Grid"},{"attributes":{"callback":null},"id":"24fd26ba-922d-45bf-a539-3c24e82c8da7","type":"DataRange1d"},{"attributes":{"data_source":{"id":"895cfb24-b089-4408-a37e-33d01b47145a","type":"ColumnDataSource"},"glyph":{"id":"9d39435e-f010-489e-a996-44ddd1a7783e","type":"Quad"},"hover_glyph":null,"muted_glyph":null},"id":"4c86cdbf-07e2-472e-821d-89fe276a2d17","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ca217a70-843a-4e67-9220-f6f0a6a9929c","type":"DataRange1d"},{"attributes":{},"id":"f23cf561-2210-48ea-863f-dd38657b08fb","type":"BasicTicker"},{"attributes":{},"id":"f4a29fc4-b7b5-484d-bfb2-fd6f99e76e35","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"980f4a38-9c75-4770-9033-c28f1025ec1b","type":"Toolbar"},{"attributes":{},"id":"9dfb7fdb-2bb5-4701-9437-b9829b8991d2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9dfb7fdb-2bb5-4701-9437-b9829b8991d2","type":"BasicTickFormatter"},"plot":{"id":"bd7f3534-703d-4008-ad7c-d601e3ee82fb","type":"Plot"},"ticker":{"id":"faa853a7-fbc6-4d76-a329-5b1097947320","type":"BasicTicker"}},"id":"62f0a806-c539-4608-a240-b34f09c569db","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"bd7f3534-703d-4008-ad7c-d601e3ee82fb","type":"Plot"},"ticker":{"id":"f23cf561-2210-48ea-863f-dd38657b08fb","type":"BasicTicker"}},"id":"720eab90-1141-4691-830b-d1c460327ec5","type":"Grid"},{"attributes":{"callback":null,"column_names":["top","right","left","bottom"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"895cfb24-b089-4408-a37e-33d01b47145a","type":"ColumnDataSource"},{"attributes":{},"id":"efd75541-6cc5-47f0-b57e-1aefd3886f32","type":"BasicTickFormatter"},{"attributes":{},"id":"b76f5340-a73a-40ce-8789-85b014f2f3f1","type":"ToolEvents"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"9d39435e-f010-489e-a996-44ddd1a7783e","type":"Quad"},{"attributes":{},"id":"33bee934-72dc-49a9-a4c6-4dce7069e0dd","type":"LinearScale"}],"root_ids":["bd7f3534-703d-4008-ad7c-d601e3ee82fb"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f5ad0226-e9fe-49a5-b336-414bc73355d5","elementid":"c412f62b-c110-4bd8-883e-29a5439b5254","modelid":"bd7f3534-703d-4008-ad7c-d601e3ee82fb"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
