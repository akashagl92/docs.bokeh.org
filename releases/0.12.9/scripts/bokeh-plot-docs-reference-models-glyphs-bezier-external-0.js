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
      };var element = document.getElementById("97e467b5-9a31-4944-a306-556a34770dc4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97e467b5-9a31-4944-a306-556a34770dc4' but no matching script tag was found. ")
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
                    var docs_json = {"f4a51020-b3c0-40bc-a1a6-f5ab980eeb13":{"roots":{"references":[{"attributes":{},"id":"8884e124-6e23-4f80-8884-92aa90c55db2","type":"BasicTicker"},{"attributes":{},"id":"b19fcd39-9a56-4561-985a-11259416ba30","type":"LinearScale"},{"attributes":{},"id":"2a7616da-c6a6-42fa-86ce-ad2cd7af3738","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","xm01","yp01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"dbe4548c-36aa-4de7-afff-1d567c0c8ec8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"eda2b169-e7b0-442d-9271-9514bb39d796","type":"BasicTickFormatter"},"plot":{"id":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3","type":"Plot"},"ticker":{"id":"2a7616da-c6a6-42fa-86ce-ad2cd7af3738","type":"BasicTicker"}},"id":"f8fb25f4-c506-4cb8-87e7-af76d9d47eca","type":"LinearAxis"},{"attributes":{"source":{"id":"dbe4548c-36aa-4de7-afff-1d567c0c8ec8","type":"ColumnDataSource"}},"id":"4060640e-a3bd-4c48-81f7-1e5538b37c5f","type":"CDSView"},{"attributes":{"callback":null},"id":"f2142c5f-c226-4a62-ba56-ffcb8158ce21","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9489acd0-23a6-42ef-b63a-2383b398226c","type":"BasicTickFormatter"},"plot":{"id":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3","type":"Plot"},"ticker":{"id":"8884e124-6e23-4f80-8884-92aa90c55db2","type":"BasicTicker"}},"id":"0b33387a-e4fa-461e-9ad5-dd0d6c9b348f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fbd88e55-3443-422d-b2a1-6d91f7bfebea","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dbe4548c-36aa-4de7-afff-1d567c0c8ec8","type":"ColumnDataSource"},"glyph":{"id":"cca20589-706c-4bca-8e73-084c67d7ddc6","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4060640e-a3bd-4c48-81f7-1e5538b37c5f","type":"CDSView"}},"id":"8da9f97b-128f-4038-8171-9e2bcc5f5fff","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2bfc8a83-cdf5-4bd5-8545-8d7cf144efd8","type":"Toolbar"},{"attributes":{"below":[{"id":"f8fb25f4-c506-4cb8-87e7-af76d9d47eca","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0b33387a-e4fa-461e-9ad5-dd0d6c9b348f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8da9f97b-128f-4038-8171-9e2bcc5f5fff","type":"GlyphRenderer"},{"id":"f8fb25f4-c506-4cb8-87e7-af76d9d47eca","type":"LinearAxis"},{"id":"0b33387a-e4fa-461e-9ad5-dd0d6c9b348f","type":"LinearAxis"},{"id":"819345f4-058b-40af-bdb4-f321a6652fa6","type":"Grid"},{"id":"637b9d64-3da5-4118-97cc-9968ea5e5da0","type":"Grid"}],"title":null,"toolbar":{"id":"2bfc8a83-cdf5-4bd5-8545-8d7cf144efd8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f2142c5f-c226-4a62-ba56-ffcb8158ce21","type":"DataRange1d"},"x_scale":{"id":"37ca1149-b2f1-45a0-b1ef-3db974bfc2af","type":"LinearScale"},"y_range":{"id":"fbd88e55-3443-422d-b2a1-6d91f7bfebea","type":"DataRange1d"},"y_scale":{"id":"b19fcd39-9a56-4561-985a-11259416ba30","type":"LinearScale"}},"id":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3","type":"Plot"},"ticker":{"id":"8884e124-6e23-4f80-8884-92aa90c55db2","type":"BasicTicker"}},"id":"637b9d64-3da5-4118-97cc-9968ea5e5da0","type":"Grid"},{"attributes":{},"id":"eda2b169-e7b0-442d-9271-9514bb39d796","type":"BasicTickFormatter"},{"attributes":{},"id":"37ca1149-b2f1-45a0-b1ef-3db974bfc2af","type":"LinearScale"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"cca20589-706c-4bca-8e73-084c67d7ddc6","type":"Bezier"},{"attributes":{"plot":{"id":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3","type":"Plot"},"ticker":{"id":"2a7616da-c6a6-42fa-86ce-ad2cd7af3738","type":"BasicTicker"}},"id":"819345f4-058b-40af-bdb4-f321a6652fa6","type":"Grid"},{"attributes":{},"id":"9489acd0-23a6-42ef-b63a-2383b398226c","type":"BasicTickFormatter"}],"root_ids":["ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"f4a51020-b3c0-40bc-a1a6-f5ab980eeb13","elementid":"97e467b5-9a31-4944-a306-556a34770dc4","modelid":"ab730d68-21d4-4f6a-93e4-6b6eb3ffa5b3"}];
                
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
