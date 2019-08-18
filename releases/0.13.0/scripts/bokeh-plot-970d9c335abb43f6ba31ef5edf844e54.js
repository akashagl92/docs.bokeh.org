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
      };var element = document.getElementById("1cf41a23-8315-486e-b540-b8a89320a69f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1cf41a23-8315-486e-b540-b8a89320a69f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4dfea419-4541-405c-9a29-b5948b21e896":{"roots":{"references":[{"attributes":{},"id":"a2e46c0d-ce15-46ed-abb3-afaf6ea838c1","type":"LinearScale"},{"attributes":{},"id":"c0c408d3-276c-441c-8668-2e8201e6828d","type":"BasicTickFormatter"},{"attributes":{},"id":"571fdae0-c468-4362-a659-c2689aeb9587","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"448021b5-6986-4a11-a202-082f1b693053","type":"ColumnDataSource"}},"id":"b644b45f-a47c-4fc7-ab8d-cdb0f13e2a07","type":"CDSView"},{"attributes":{"formatter":{"id":"571fdae0-c468-4362-a659-c2689aeb9587","type":"BasicTickFormatter"},"plot":{"id":"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f8624ba-deeb-4195-9217-7e526c549b8c","type":"BasicTicker"}},"id":"e7156710-747c-4101-8a12-4069d9bef891","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"01e0ad48-2334-4880-83da-dcbaa6fa5e0e","type":"Quad"},{"attributes":{},"id":"4f8624ba-deeb-4195-9217-7e526c549b8c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"448021b5-6986-4a11-a202-082f1b693053","type":"ColumnDataSource"},"glyph":{"id":"01e0ad48-2334-4880-83da-dcbaa6fa5e0e","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d00cb80c-0f7d-4b38-a1b1-7f326a4f877b","type":"Quad"},"selection_glyph":null,"view":{"id":"b644b45f-a47c-4fc7-ab8d-cdb0f13e2a07","type":"CDSView"}},"id":"9d125f62-547b-4b6e-95d4-39bf6601d8d3","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"67839b6b-ed61-49df-be9f-2d7c7d5d3102","type":"Title"},{"attributes":{},"id":"58e8a36a-3fcf-42a3-957a-69dc644fa38b","type":"UnionRenderers"},{"attributes":{},"id":"e0de0eac-a2a1-4e15-8b9d-0dfbe4890849","type":"BasicTicker"},{"attributes":{},"id":"831778c0-a4a1-4bf5-b397-a98c0406e93c","type":"ResetTool"},{"attributes":{},"id":"dd4a69cb-ca20-4efe-8da5-891e0be7d0eb","type":"PanTool"},{"attributes":{"formatter":{"id":"c0c408d3-276c-441c-8668-2e8201e6828d","type":"BasicTickFormatter"},"plot":{"id":"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0de0eac-a2a1-4e15-8b9d-0dfbe4890849","type":"BasicTicker"}},"id":"0ffe7275-fc43-40b2-92a3-cba0b189f9fb","type":"LinearAxis"},{"attributes":{},"id":"4413f41e-cd47-4e9b-b140-050829829a80","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"e7156710-747c-4101-8a12-4069d9bef891","type":"LinearAxis"}],"left":[{"id":"0ffe7275-fc43-40b2-92a3-cba0b189f9fb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e7156710-747c-4101-8a12-4069d9bef891","type":"LinearAxis"},{"id":"4223ddf0-5cfe-435e-a1ad-641451ddb088","type":"Grid"},{"id":"0ffe7275-fc43-40b2-92a3-cba0b189f9fb","type":"LinearAxis"},{"id":"6a0b1f9d-ce1d-4971-9252-2afe0dcfa2de","type":"Grid"},{"id":"33f45dc9-dc32-442d-882d-b8a3ab8591c9","type":"BoxAnnotation"},{"id":"9d125f62-547b-4b6e-95d4-39bf6601d8d3","type":"GlyphRenderer"}],"title":{"id":"67839b6b-ed61-49df-be9f-2d7c7d5d3102","type":"Title"},"toolbar":{"id":"9ff03724-35e7-4a2d-b409-939bdd53b276","type":"Toolbar"},"x_range":{"id":"22310f55-8ccd-495d-b7e0-d5c8080b64fb","type":"DataRange1d"},"x_scale":{"id":"a8825247-cba7-4bf4-8ef8-ee0423ef664f","type":"LinearScale"},"y_range":{"id":"409b4890-3b08-4187-8d8a-a33e477915c1","type":"DataRange1d"},"y_scale":{"id":"a2e46c0d-ce15-46ed-abb3-afaf6ea838c1","type":"LinearScale"}},"id":"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7a6ef4b5-d384-42d2-913a-5213554cbe78","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"dd4a69cb-ca20-4efe-8da5-891e0be7d0eb","type":"PanTool"},{"id":"4413f41e-cd47-4e9b-b140-050829829a80","type":"WheelZoomTool"},{"id":"1beb5a84-7c9a-4773-806b-c2bc225cde8c","type":"BoxZoomTool"},{"id":"0598c37f-3011-4aaa-929c-a238d1c5ad01","type":"SaveTool"},{"id":"831778c0-a4a1-4bf5-b397-a98c0406e93c","type":"ResetTool"},{"id":"801972af-24dd-4090-832f-60acb22ae6b7","type":"HelpTool"}]},"id":"9ff03724-35e7-4a2d-b409-939bdd53b276","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0de0eac-a2a1-4e15-8b9d-0dfbe4890849","type":"BasicTicker"}},"id":"6a0b1f9d-ce1d-4971-9252-2afe0dcfa2de","type":"Grid"},{"attributes":{"plot":{"id":"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f8624ba-deeb-4195-9217-7e526c549b8c","type":"BasicTicker"}},"id":"4223ddf0-5cfe-435e-a1ad-641451ddb088","type":"Grid"},{"attributes":{},"id":"0598c37f-3011-4aaa-929c-a238d1c5ad01","type":"SaveTool"},{"attributes":{"callback":null},"id":"22310f55-8ccd-495d-b7e0-d5c8080b64fb","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"7a6ef4b5-d384-42d2-913a-5213554cbe78","type":"Selection"},"selection_policy":{"id":"58e8a36a-3fcf-42a3-957a-69dc644fa38b","type":"UnionRenderers"}},"id":"448021b5-6986-4a11-a202-082f1b693053","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"33f45dc9-dc32-442d-882d-b8a3ab8591c9","type":"BoxAnnotation"}},"id":"1beb5a84-7c9a-4773-806b-c2bc225cde8c","type":"BoxZoomTool"},{"attributes":{},"id":"801972af-24dd-4090-832f-60acb22ae6b7","type":"HelpTool"},{"attributes":{},"id":"a8825247-cba7-4bf4-8ef8-ee0423ef664f","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33f45dc9-dc32-442d-882d-b8a3ab8591c9","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"409b4890-3b08-4187-8d8a-a33e477915c1","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"d00cb80c-0f7d-4b38-a1b1-7f326a4f877b","type":"Quad"}],"root_ids":["8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4dfea419-4541-405c-9a29-b5948b21e896","roots":{"8d416e8b-7aaa-4b55-beff-d8c4f76bf3b6":"1cf41a23-8315-486e-b540-b8a89320a69f"}}];
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