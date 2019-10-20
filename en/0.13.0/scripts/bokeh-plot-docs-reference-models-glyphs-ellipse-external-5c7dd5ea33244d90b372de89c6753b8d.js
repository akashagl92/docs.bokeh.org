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
      };var element = document.getElementById("50c91e52-f2fd-4ef1-a18a-73f2755f2569");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50c91e52-f2fd-4ef1-a18a-73f2755f2569' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"80bc40c7-f1d9-4d8c-be9f-d45e08d89dea":{"roots":{"references":[{"attributes":{"callback":null},"id":"9af05609-6a7f-4e2f-9163-394a8a083d26","type":"DataRange1d"},{"attributes":{"callback":null},"id":"df6428e3-df75-4eae-a2c7-d443f6ccd525","type":"DataRange1d"},{"attributes":{"source":{"id":"f4257042-c60b-4e06-93c6-f9d53a5a39ec","type":"ColumnDataSource"}},"id":"2c52fb32-2c56-4938-a948-84621e71e64c","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"a00826ae-ee65-4654-a185-b70d4b94d479","type":"Plot"},"ticker":{"id":"1aa327d4-8969-4ef9-b2ea-8f02301ceeb0","type":"BasicTicker"}},"id":"709cbb54-3cf7-4d42-9849-38f9c4ed0b0e","type":"Grid"},{"attributes":{},"id":"7d697f6c-d2e4-4a5b-93cb-71d0404759aa","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"debd162d-deed-444a-8e2d-74e59795c4ab","type":"Ellipse"},{"attributes":{},"id":"1ddcca5a-4459-4bfa-9e65-de1fe23bfa5e","type":"LinearScale"},{"attributes":{},"id":"89d93ecd-27b3-45ec-8599-17f13f9c70b9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a00826ae-ee65-4654-a185-b70d4b94d479","type":"Plot"},"ticker":{"id":"a4f3e483-80af-473c-9672-a7246f350439","type":"BasicTicker"}},"id":"8e0c49da-d8c7-4093-92df-e3ccf250653b","type":"Grid"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"968e5a7b-e611-4057-99be-839e426c5adb","type":"Selection"},"selection_policy":{"id":"070e5526-d540-4a39-8873-7b1f5ccdea3e","type":"UnionRenderers"}},"id":"f4257042-c60b-4e06-93c6-f9d53a5a39ec","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f4257042-c60b-4e06-93c6-f9d53a5a39ec","type":"ColumnDataSource"},"glyph":{"id":"debd162d-deed-444a-8e2d-74e59795c4ab","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2c52fb32-2c56-4938-a948-84621e71e64c","type":"CDSView"}},"id":"7dcd1e40-a27f-4516-97e3-8e1ce979eb2a","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"c06d37ae-2d65-49d3-adbb-485d0c14e27d","type":"Toolbar"},{"attributes":{"formatter":{"id":"7d697f6c-d2e4-4a5b-93cb-71d0404759aa","type":"BasicTickFormatter"},"plot":{"id":"a00826ae-ee65-4654-a185-b70d4b94d479","type":"Plot"},"ticker":{"id":"a4f3e483-80af-473c-9672-a7246f350439","type":"BasicTicker"}},"id":"a1c09aba-a37b-49ff-9022-ab78580c0eb5","type":"LinearAxis"},{"attributes":{},"id":"a4f3e483-80af-473c-9672-a7246f350439","type":"BasicTicker"},{"attributes":{},"id":"968e5a7b-e611-4057-99be-839e426c5adb","type":"Selection"},{"attributes":{"below":[{"id":"a1c09aba-a37b-49ff-9022-ab78580c0eb5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d6370959-e182-414a-bc50-22a2067cbd4f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7dcd1e40-a27f-4516-97e3-8e1ce979eb2a","type":"GlyphRenderer"},{"id":"a1c09aba-a37b-49ff-9022-ab78580c0eb5","type":"LinearAxis"},{"id":"d6370959-e182-414a-bc50-22a2067cbd4f","type":"LinearAxis"},{"id":"8e0c49da-d8c7-4093-92df-e3ccf250653b","type":"Grid"},{"id":"709cbb54-3cf7-4d42-9849-38f9c4ed0b0e","type":"Grid"}],"title":null,"toolbar":{"id":"c06d37ae-2d65-49d3-adbb-485d0c14e27d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9af05609-6a7f-4e2f-9163-394a8a083d26","type":"DataRange1d"},"x_scale":{"id":"1ddcca5a-4459-4bfa-9e65-de1fe23bfa5e","type":"LinearScale"},"y_range":{"id":"df6428e3-df75-4eae-a2c7-d443f6ccd525","type":"DataRange1d"},"y_scale":{"id":"175239a3-3d88-4b63-b534-1f7d6a121450","type":"LinearScale"}},"id":"a00826ae-ee65-4654-a185-b70d4b94d479","type":"Plot"},{"attributes":{},"id":"175239a3-3d88-4b63-b534-1f7d6a121450","type":"LinearScale"},{"attributes":{"formatter":{"id":"89d93ecd-27b3-45ec-8599-17f13f9c70b9","type":"BasicTickFormatter"},"plot":{"id":"a00826ae-ee65-4654-a185-b70d4b94d479","type":"Plot"},"ticker":{"id":"1aa327d4-8969-4ef9-b2ea-8f02301ceeb0","type":"BasicTicker"}},"id":"d6370959-e182-414a-bc50-22a2067cbd4f","type":"LinearAxis"},{"attributes":{},"id":"1aa327d4-8969-4ef9-b2ea-8f02301ceeb0","type":"BasicTicker"},{"attributes":{},"id":"070e5526-d540-4a39-8873-7b1f5ccdea3e","type":"UnionRenderers"}],"root_ids":["a00826ae-ee65-4654-a185-b70d4b94d479"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"80bc40c7-f1d9-4d8c-be9f-d45e08d89dea","roots":{"a00826ae-ee65-4654-a185-b70d4b94d479":"50c91e52-f2fd-4ef1-a18a-73f2755f2569"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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