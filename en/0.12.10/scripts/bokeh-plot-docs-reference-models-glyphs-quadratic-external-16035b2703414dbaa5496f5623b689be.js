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
      };var element = document.getElementById("30d126ce-33b3-476d-827e-5139e53f61ae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30d126ce-33b3-476d-827e-5139e53f61ae' but no matching script tag was found. ")
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
                    var docs_json = {"3ab1de5c-e07a-4a0b-b1d2-2e2d643263a4":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","yp01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"e9c5b5cd-5f1a-427d-9b99-bb56adbf1f19","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"3875d88a-7d55-48f2-a18e-db5c79cefcd8","type":"DataRange1d"},{"attributes":{},"id":"b7c5f98c-9e99-45ee-971a-541dddac5f98","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8","type":"Plot"},"ticker":{"id":"519403d8-7a4c-4d53-962d-9b54dca5f388","type":"BasicTicker"}},"id":"48f9675a-73a0-4ba4-be00-519c2d68b9dd","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a266ce23-b443-4026-a1b7-1f2d0000a24f","type":"Toolbar"},{"attributes":{},"id":"e26a5b12-c05c-482c-8acc-e49d679555c9","type":"LinearScale"},{"attributes":{"callback":null},"id":"4321550c-cca0-47f4-9330-63001d2d5f78","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e9c5b5cd-5f1a-427d-9b99-bb56adbf1f19","type":"ColumnDataSource"},"glyph":{"id":"eb00914d-5c1a-48fe-9877-83b91b85de6a","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6da38553-926a-4870-b48b-8f18f573fd0b","type":"CDSView"}},"id":"e53a1747-4caf-4d30-b20c-eb6805cc3b72","type":"GlyphRenderer"},{"attributes":{},"id":"f4c3f8a2-f631-4f6d-b730-1f593060dce7","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8","type":"Plot"},"ticker":{"id":"2ecf3573-d73b-42e1-b65c-03af4807b5e8","type":"BasicTicker"}},"id":"415fb07b-3b3c-47bc-8331-f9577b6adf00","type":"Grid"},{"attributes":{"below":[{"id":"52b79c17-39a9-4156-9723-f28fbae46005","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"47fcd11b-c056-4670-839b-bad98436e746","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e53a1747-4caf-4d30-b20c-eb6805cc3b72","type":"GlyphRenderer"},{"id":"52b79c17-39a9-4156-9723-f28fbae46005","type":"LinearAxis"},{"id":"47fcd11b-c056-4670-839b-bad98436e746","type":"LinearAxis"},{"id":"48f9675a-73a0-4ba4-be00-519c2d68b9dd","type":"Grid"},{"id":"415fb07b-3b3c-47bc-8331-f9577b6adf00","type":"Grid"}],"title":null,"toolbar":{"id":"a266ce23-b443-4026-a1b7-1f2d0000a24f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3875d88a-7d55-48f2-a18e-db5c79cefcd8","type":"DataRange1d"},"x_scale":{"id":"b56c816a-6ee0-4239-9057-67714aefc810","type":"LinearScale"},"y_range":{"id":"4321550c-cca0-47f4-9330-63001d2d5f78","type":"DataRange1d"},"y_scale":{"id":"e26a5b12-c05c-482c-8acc-e49d679555c9","type":"LinearScale"}},"id":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8","type":"Plot"},{"attributes":{},"id":"519403d8-7a4c-4d53-962d-9b54dca5f388","type":"BasicTicker"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"eb00914d-5c1a-48fe-9877-83b91b85de6a","type":"Quadratic"},{"attributes":{"formatter":{"id":"f4c3f8a2-f631-4f6d-b730-1f593060dce7","type":"BasicTickFormatter"},"plot":{"id":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8","type":"Plot"},"ticker":{"id":"2ecf3573-d73b-42e1-b65c-03af4807b5e8","type":"BasicTicker"}},"id":"47fcd11b-c056-4670-839b-bad98436e746","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b7c5f98c-9e99-45ee-971a-541dddac5f98","type":"BasicTickFormatter"},"plot":{"id":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8","type":"Plot"},"ticker":{"id":"519403d8-7a4c-4d53-962d-9b54dca5f388","type":"BasicTicker"}},"id":"52b79c17-39a9-4156-9723-f28fbae46005","type":"LinearAxis"},{"attributes":{},"id":"b56c816a-6ee0-4239-9057-67714aefc810","type":"LinearScale"},{"attributes":{},"id":"2ecf3573-d73b-42e1-b65c-03af4807b5e8","type":"BasicTicker"},{"attributes":{"source":{"id":"e9c5b5cd-5f1a-427d-9b99-bb56adbf1f19","type":"ColumnDataSource"}},"id":"6da38553-926a-4870-b48b-8f18f573fd0b","type":"CDSView"}],"root_ids":["a1e2a743-59cd-495c-982d-5b6e1d3c46e8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3ab1de5c-e07a-4a0b-b1d2-2e2d643263a4","elementid":"30d126ce-33b3-476d-827e-5139e53f61ae","modelid":"a1e2a743-59cd-495c-982d-5b6e1d3c46e8"}];
                
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
