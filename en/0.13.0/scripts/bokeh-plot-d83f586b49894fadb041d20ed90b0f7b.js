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
      };var element = document.getElementById("87cd2837-c04c-48dd-be4f-0fb5bdebfc9e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87cd2837-c04c-48dd-be4f-0fb5bdebfc9e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"019cf829-093a-43c6-9c6f-c84570c08df0":{"roots":{"references":[{"attributes":{},"id":"6d254bbd-b577-41f5-9e67-88e25d3d0573","type":"WheelZoomTool"},{"attributes":{},"id":"27728861-bc9b-47ab-87ba-ea3ce7c39af9","type":"LinearScale"},{"attributes":{"formatter":{"id":"8a82bb9e-8b99-4e3b-a09c-8b92c2e1ae67","type":"BasicTickFormatter"},"plot":{"id":"efca3a0f-0d28-46c1-b0be-df349518ac11","subtype":"Figure","type":"Plot"},"ticker":{"id":"1da8a74e-deb7-457d-a5d4-8eee0855b90f","type":"BasicTicker"}},"id":"ac42a3be-313d-4327-8e39-3daacdd96f2b","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"1045074a-8c85-4021-818d-95c8ee89cf3c","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"efca3a0f-0d28-46c1-b0be-df349518ac11","subtype":"Figure","type":"Plot"},"ticker":{"id":"1da8a74e-deb7-457d-a5d4-8eee0855b90f","type":"BasicTicker"}},"id":"2bed0ae7-d748-440c-bcbb-e68c36d4c6de","type":"Grid"},{"attributes":{"callback":null},"id":"922d9a1b-2503-417e-b260-71c7ca79078d","type":"DataRange1d"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfba8c3b-7aca-4f0d-adea-dd1d50419f18","type":"Wedge"},{"attributes":{"formatter":{"id":"281e8c8f-a254-47f9-8cc4-c54105978729","type":"BasicTickFormatter"},"plot":{"id":"efca3a0f-0d28-46c1-b0be-df349518ac11","subtype":"Figure","type":"Plot"},"ticker":{"id":"46d9bdc2-6d28-43ac-b8d0-61148d29cfea","type":"BasicTicker"}},"id":"3abda0e7-55fd-4ec4-bf8a-b5ef7a1c6a96","type":"LinearAxis"},{"attributes":{},"id":"939a2806-fc6d-4eb4-9d8b-201594a330e6","type":"Selection"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"840bab78-b623-489a-960c-864ad411cba9","type":"Wedge"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"939a2806-fc6d-4eb4-9d8b-201594a330e6","type":"Selection"},"selection_policy":{"id":"b4670e25-68d7-44ef-a061-d191d84632a9","type":"UnionRenderers"}},"id":"26754873-8a67-412c-94e3-c57bf23e8fe1","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"3abda0e7-55fd-4ec4-bf8a-b5ef7a1c6a96","type":"LinearAxis"}],"left":[{"id":"ac42a3be-313d-4327-8e39-3daacdd96f2b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3abda0e7-55fd-4ec4-bf8a-b5ef7a1c6a96","type":"LinearAxis"},{"id":"92dc3cbb-db7a-4b11-abcd-00228779e1ef","type":"Grid"},{"id":"ac42a3be-313d-4327-8e39-3daacdd96f2b","type":"LinearAxis"},{"id":"2bed0ae7-d748-440c-bcbb-e68c36d4c6de","type":"Grid"},{"id":"921468d1-4210-42ed-9aad-3cff666a3b6e","type":"BoxAnnotation"},{"id":"ecd34d93-8b91-4073-9356-0b7605e28c7b","type":"GlyphRenderer"}],"title":{"id":"1045074a-8c85-4021-818d-95c8ee89cf3c","type":"Title"},"toolbar":{"id":"748617bd-acbf-4d41-9fb9-48f8c7e75042","type":"Toolbar"},"x_range":{"id":"f0a27bdd-c284-4326-814a-c41d03a24b10","type":"DataRange1d"},"x_scale":{"id":"27728861-bc9b-47ab-87ba-ea3ce7c39af9","type":"LinearScale"},"y_range":{"id":"922d9a1b-2503-417e-b260-71c7ca79078d","type":"DataRange1d"},"y_scale":{"id":"93467693-bfeb-41f1-ac00-f33ce135efa8","type":"LinearScale"}},"id":"efca3a0f-0d28-46c1-b0be-df349518ac11","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"f0a27bdd-c284-4326-814a-c41d03a24b10","type":"DataRange1d"},{"attributes":{"source":{"id":"26754873-8a67-412c-94e3-c57bf23e8fe1","type":"ColumnDataSource"}},"id":"813d0f8e-2c01-4121-9994-85290124fdff","type":"CDSView"},{"attributes":{},"id":"b4670e25-68d7-44ef-a061-d191d84632a9","type":"UnionRenderers"},{"attributes":{},"id":"93467693-bfeb-41f1-ac00-f33ce135efa8","type":"LinearScale"},{"attributes":{},"id":"6045908c-9252-4183-9f67-9ee2676287ea","type":"PanTool"},{"attributes":{"data_source":{"id":"26754873-8a67-412c-94e3-c57bf23e8fe1","type":"ColumnDataSource"},"glyph":{"id":"840bab78-b623-489a-960c-864ad411cba9","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfba8c3b-7aca-4f0d-adea-dd1d50419f18","type":"Wedge"},"selection_glyph":null,"view":{"id":"813d0f8e-2c01-4121-9994-85290124fdff","type":"CDSView"}},"id":"ecd34d93-8b91-4073-9356-0b7605e28c7b","type":"GlyphRenderer"},{"attributes":{},"id":"281e8c8f-a254-47f9-8cc4-c54105978729","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6045908c-9252-4183-9f67-9ee2676287ea","type":"PanTool"},{"id":"6d254bbd-b577-41f5-9e67-88e25d3d0573","type":"WheelZoomTool"},{"id":"f7150100-36a2-4f7b-8c34-5daaaeeb4de3","type":"BoxZoomTool"},{"id":"3d9bff74-eefc-47ea-9ab2-0493f2a9a7a5","type":"SaveTool"},{"id":"052f19b6-341b-4a2d-9d16-d1da13bee0c2","type":"ResetTool"},{"id":"580da5f0-8f45-4fc0-a559-faaae333e4e5","type":"HelpTool"}]},"id":"748617bd-acbf-4d41-9fb9-48f8c7e75042","type":"Toolbar"},{"attributes":{"plot":{"id":"efca3a0f-0d28-46c1-b0be-df349518ac11","subtype":"Figure","type":"Plot"},"ticker":{"id":"46d9bdc2-6d28-43ac-b8d0-61148d29cfea","type":"BasicTicker"}},"id":"92dc3cbb-db7a-4b11-abcd-00228779e1ef","type":"Grid"},{"attributes":{},"id":"1da8a74e-deb7-457d-a5d4-8eee0855b90f","type":"BasicTicker"},{"attributes":{"overlay":{"id":"921468d1-4210-42ed-9aad-3cff666a3b6e","type":"BoxAnnotation"}},"id":"f7150100-36a2-4f7b-8c34-5daaaeeb4de3","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"921468d1-4210-42ed-9aad-3cff666a3b6e","type":"BoxAnnotation"},{"attributes":{},"id":"3d9bff74-eefc-47ea-9ab2-0493f2a9a7a5","type":"SaveTool"},{"attributes":{},"id":"580da5f0-8f45-4fc0-a559-faaae333e4e5","type":"HelpTool"},{"attributes":{},"id":"8a82bb9e-8b99-4e3b-a09c-8b92c2e1ae67","type":"BasicTickFormatter"},{"attributes":{},"id":"052f19b6-341b-4a2d-9d16-d1da13bee0c2","type":"ResetTool"},{"attributes":{},"id":"46d9bdc2-6d28-43ac-b8d0-61148d29cfea","type":"BasicTicker"}],"root_ids":["efca3a0f-0d28-46c1-b0be-df349518ac11"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"019cf829-093a-43c6-9c6f-c84570c08df0","roots":{"efca3a0f-0d28-46c1-b0be-df349518ac11":"87cd2837-c04c-48dd-be4f-0fb5bdebfc9e"}}];
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