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
      };var element = document.getElementById("ef02a4c1-0302-4492-9435-c45e43cc6420");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef02a4c1-0302-4492-9435-c45e43cc6420' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"48db692f-78b9-4ddc-a7b7-cd2f98a9dba3":{"roots":{"references":[{"attributes":{},"id":"a80a7201-1204-4b3c-945f-3a6e563feb97","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"dbc51c7a-6fd8-45f6-a6fe-46c7a13e74d8","type":"Toolbar"},{"attributes":{},"id":"29c01a7c-8d35-43b1-92b2-fd22aa42f56f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ca3bc70d-5b4a-4494-a55f-7961fe0a44ed","type":"BasicTickFormatter"},"plot":{"id":"190ccfe8-caf2-41f5-ae7a-b36460817471","type":"Plot"},"ticker":{"id":"3e013e96-186b-4c3a-9d89-8039fa9b0c88","type":"BasicTicker"}},"id":"f4f12e78-76de-476b-b49b-99d84312b804","type":"LinearAxis"},{"attributes":{},"id":"3e013e96-186b-4c3a-9d89-8039fa9b0c88","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"136efd4c-5e40-4823-9435-054e56529d6c","type":"Ellipse"},{"attributes":{},"id":"57a2b4f7-6255-4688-8e36-4349ed748bd6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d35b6ddc-cb90-4854-ab4c-6ab9d50e365c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"c59ea570-5224-4595-96de-b1a5a988dc6e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"57a2b4f7-6255-4688-8e36-4349ed748bd6","type":"BasicTickFormatter"},"plot":{"id":"190ccfe8-caf2-41f5-ae7a-b36460817471","type":"Plot"},"ticker":{"id":"29c01a7c-8d35-43b1-92b2-fd22aa42f56f","type":"BasicTicker"}},"id":"e09f632e-4754-44ca-8dbd-e690144cf6e9","type":"LinearAxis"},{"attributes":{},"id":"ca3bc70d-5b4a-4494-a55f-7961fe0a44ed","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"c9b19b71-f4e0-4b48-beaf-43cb1fa21f69","type":"ColumnDataSource"}},"id":"e1e9268f-528e-4836-b10a-612ea208ae83","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"190ccfe8-caf2-41f5-ae7a-b36460817471","type":"Plot"},"ticker":{"id":"29c01a7c-8d35-43b1-92b2-fd22aa42f56f","type":"BasicTicker"}},"id":"103982ab-52be-4bed-914b-19971a502c81","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c9b19b71-f4e0-4b48-beaf-43cb1fa21f69","type":"ColumnDataSource"},{"attributes":{},"id":"e6059b51-0c95-4a52-90f2-5baaea5cd5ec","type":"LinearScale"},{"attributes":{"plot":{"id":"190ccfe8-caf2-41f5-ae7a-b36460817471","type":"Plot"},"ticker":{"id":"3e013e96-186b-4c3a-9d89-8039fa9b0c88","type":"BasicTicker"}},"id":"bc843d5f-6765-4616-a658-b81fa2327513","type":"Grid"},{"attributes":{"below":[{"id":"f4f12e78-76de-476b-b49b-99d84312b804","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e09f632e-4754-44ca-8dbd-e690144cf6e9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"58516231-b287-418c-a61c-4b75b7518fe6","type":"GlyphRenderer"},{"id":"f4f12e78-76de-476b-b49b-99d84312b804","type":"LinearAxis"},{"id":"e09f632e-4754-44ca-8dbd-e690144cf6e9","type":"LinearAxis"},{"id":"bc843d5f-6765-4616-a658-b81fa2327513","type":"Grid"},{"id":"103982ab-52be-4bed-914b-19971a502c81","type":"Grid"}],"title":null,"toolbar":{"id":"dbc51c7a-6fd8-45f6-a6fe-46c7a13e74d8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d35b6ddc-cb90-4854-ab4c-6ab9d50e365c","type":"DataRange1d"},"x_scale":{"id":"e6059b51-0c95-4a52-90f2-5baaea5cd5ec","type":"LinearScale"},"y_range":{"id":"c59ea570-5224-4595-96de-b1a5a988dc6e","type":"DataRange1d"},"y_scale":{"id":"a80a7201-1204-4b3c-945f-3a6e563feb97","type":"LinearScale"}},"id":"190ccfe8-caf2-41f5-ae7a-b36460817471","type":"Plot"},{"attributes":{"data_source":{"id":"c9b19b71-f4e0-4b48-beaf-43cb1fa21f69","type":"ColumnDataSource"},"glyph":{"id":"136efd4c-5e40-4823-9435-054e56529d6c","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e1e9268f-528e-4836-b10a-612ea208ae83","type":"CDSView"}},"id":"58516231-b287-418c-a61c-4b75b7518fe6","type":"GlyphRenderer"}],"root_ids":["190ccfe8-caf2-41f5-ae7a-b36460817471"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"48db692f-78b9-4ddc-a7b7-cd2f98a9dba3","elementid":"ef02a4c1-0302-4492-9435-c45e43cc6420","modelid":"190ccfe8-caf2-41f5-ae7a-b36460817471"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
