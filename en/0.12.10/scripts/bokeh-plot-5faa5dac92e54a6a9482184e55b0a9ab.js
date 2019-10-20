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
      };var element = document.getElementById("a8c645cb-1c3f-433b-8d48-9380c47ac874");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8c645cb-1c3f-433b-8d48-9380c47ac874' but no matching script tag was found. ")
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
                    var docs_json = {"59a4fdf3-4ff3-46db-8da0-ee07bb3b5524":{"roots":{"references":[{"attributes":{"callback":null},"id":"072d21a7-ca66-437c-9ce7-a5f54bd84add","type":"DataRange1d"},{"attributes":{},"id":"106c8578-45d2-4507-ba1c-55378cafc12f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505","subtype":"Figure","type":"Plot"},"ticker":{"id":"313b07c8-6868-42d2-b009-a788d74f56e2","type":"BasicTicker"}},"id":"0f9598ef-4996-4d73-9cbc-32b05ab90f8a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"74c656ff-a1b3-4664-bfdd-cc6232cbde3a","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e37ce117-f394-4c4a-92ef-8b5de6f691a4","type":"Circle"},{"attributes":{"callback":null},"id":"21705033-a129-48ed-82fd-c9a38df6dd3c","type":"DataRange1d"},{"attributes":{},"id":"313b07c8-6868-42d2-b009-a788d74f56e2","type":"BasicTicker"},{"attributes":{},"id":"72a3d1dc-7109-4972-a73d-bfb6f1291336","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d38b211-4b49-482f-95c7-f4296796c868","type":"Circle"},{"attributes":{"below":[{"id":"6699fb3e-d561-48f9-9a09-5c45e16a8aca","type":"LinearAxis"}],"left":[{"id":"c03e6086-c03f-40c8-97c0-239d68932c05","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6699fb3e-d561-48f9-9a09-5c45e16a8aca","type":"LinearAxis"},{"id":"0f9598ef-4996-4d73-9cbc-32b05ab90f8a","type":"Grid"},{"id":"c03e6086-c03f-40c8-97c0-239d68932c05","type":"LinearAxis"},{"id":"602ebcc5-ec92-4052-b1f5-9201efa3dd99","type":"Grid"},{"id":"5126241d-a3b8-4ed3-a4e2-0d29ac929f25","type":"BoxAnnotation"},{"id":"332920bb-a783-4f44-80eb-ed7b1d93fa12","type":"GlyphRenderer"}],"title":{"id":"74c656ff-a1b3-4664-bfdd-cc6232cbde3a","type":"Title"},"toolbar":{"id":"9e9acd69-6013-4428-8d1c-58bd31c2e9f2","type":"Toolbar"},"x_range":{"id":"072d21a7-ca66-437c-9ce7-a5f54bd84add","type":"DataRange1d"},"x_scale":{"id":"3a3470c5-1ce7-4edd-b6a7-1869b5ab4b8e","type":"LinearScale"},"y_range":{"id":"21705033-a129-48ed-82fd-c9a38df6dd3c","type":"DataRange1d"},"y_scale":{"id":"72a3d1dc-7109-4972-a73d-bfb6f1291336","type":"LinearScale"}},"id":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"106c8578-45d2-4507-ba1c-55378cafc12f","type":"BasicTickFormatter"},"plot":{"id":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505","subtype":"Figure","type":"Plot"},"ticker":{"id":"359dc3a1-7eff-4f0b-964d-f7c7a67a4c41","type":"BasicTicker"}},"id":"c03e6086-c03f-40c8-97c0-239d68932c05","type":"LinearAxis"},{"attributes":{},"id":"3e4ae9fe-df24-4f97-b310-6fa59d41ad28","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3e4ae9fe-df24-4f97-b310-6fa59d41ad28","type":"BasicTickFormatter"},"plot":{"id":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505","subtype":"Figure","type":"Plot"},"ticker":{"id":"313b07c8-6868-42d2-b009-a788d74f56e2","type":"BasicTicker"}},"id":"6699fb3e-d561-48f9-9a09-5c45e16a8aca","type":"LinearAxis"},{"attributes":{},"id":"359dc3a1-7eff-4f0b-964d-f7c7a67a4c41","type":"BasicTicker"},{"attributes":{"source":{"id":"86e0ed72-68f7-494b-8e70-bc5ca06ad23e","type":"ColumnDataSource"}},"id":"fe635f09-ff85-421e-b3f5-1cb32b085af1","type":"CDSView"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505","subtype":"Figure","type":"Plot"},"ticker":{"id":"359dc3a1-7eff-4f0b-964d-f7c7a67a4c41","type":"BasicTicker"}},"id":"602ebcc5-ec92-4052-b1f5-9201efa3dd99","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"86e0ed72-68f7-494b-8e70-bc5ca06ad23e","type":"ColumnDataSource"},{"attributes":{},"id":"09e82f26-e673-4ee4-a73b-fd5fc2cc3c9a","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"86e0ed72-68f7-494b-8e70-bc5ca06ad23e","type":"ColumnDataSource"},"glyph":{"id":"3d38b211-4b49-482f-95c7-f4296796c868","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e37ce117-f394-4c4a-92ef-8b5de6f691a4","type":"Circle"},"selection_glyph":null,"view":{"id":"fe635f09-ff85-421e-b3f5-1cb32b085af1","type":"CDSView"}},"id":"332920bb-a783-4f44-80eb-ed7b1d93fa12","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5126241d-a3b8-4ed3-a4e2-0d29ac929f25","type":"BoxAnnotation"},{"attributes":{},"id":"3a3470c5-1ce7-4edd-b6a7-1869b5ab4b8e","type":"LinearScale"},{"attributes":{},"id":"fad1f1cd-3760-4ce3-ae97-ee5b5ff07da3","type":"PanTool"},{"attributes":{"overlay":{"id":"5126241d-a3b8-4ed3-a4e2-0d29ac929f25","type":"BoxAnnotation"}},"id":"6c0b3f0d-0291-437b-8fa5-d1df849669a0","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fad1f1cd-3760-4ce3-ae97-ee5b5ff07da3","type":"PanTool"},{"id":"09e82f26-e673-4ee4-a73b-fd5fc2cc3c9a","type":"WheelZoomTool"},{"id":"6c0b3f0d-0291-437b-8fa5-d1df849669a0","type":"BoxZoomTool"},{"id":"5b43a172-7f25-4014-8f51-039a3d5b929b","type":"SaveTool"},{"id":"56db4884-9eec-4e25-84d8-8987bfb6b061","type":"ResetTool"},{"id":"cc1d0572-d4fb-45d5-bbfb-3526eab29e4a","type":"HelpTool"}]},"id":"9e9acd69-6013-4428-8d1c-58bd31c2e9f2","type":"Toolbar"},{"attributes":{},"id":"5b43a172-7f25-4014-8f51-039a3d5b929b","type":"SaveTool"},{"attributes":{},"id":"56db4884-9eec-4e25-84d8-8987bfb6b061","type":"ResetTool"},{"attributes":{},"id":"cc1d0572-d4fb-45d5-bbfb-3526eab29e4a","type":"HelpTool"}],"root_ids":["9cb3945d-62e2-49a4-a0bb-f59fa0dc6505"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"59a4fdf3-4ff3-46db-8da0-ee07bb3b5524","elementid":"a8c645cb-1c3f-433b-8d48-9380c47ac874","modelid":"9cb3945d-62e2-49a4-a0bb-f59fa0dc6505"}];
                
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
