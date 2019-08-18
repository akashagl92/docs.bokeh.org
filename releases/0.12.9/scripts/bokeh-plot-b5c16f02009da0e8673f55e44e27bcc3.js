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
      };var element = document.getElementById("36414dc4-b3f6-4557-9e1b-d7bfe1dbac5f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36414dc4-b3f6-4557-9e1b-d7bfe1dbac5f' but no matching script tag was found. ")
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
                    var docs_json = {"574b7d75-94e5-4a5d-9163-38a3d848f46e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"51d86474-5d47-402c-a7f4-f52f270a24d9","type":"ColumnDataSource"},{"attributes":{},"id":"0933922d-16fe-4c2c-a2d9-1f80e73830fd","type":"PanTool"},{"attributes":{"data_source":{"id":"51d86474-5d47-402c-a7f4-f52f270a24d9","type":"ColumnDataSource"},"glyph":{"id":"64a4d62e-7d03-476e-9b19-3b83102660bc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78e0695c-689c-403d-8c14-2ba7abb8e538","type":"Circle"},"selection_glyph":null,"view":{"id":"7def34e0-4a40-4bc0-995e-b2b61f3d9235","type":"CDSView"}},"id":"14f8a40c-5b54-4ffc-8cf5-0893a2cdb3b8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"82a34ed5-e33b-4fe7-ae38-2c4ffec6f1f8","type":"LinearAxis"}],"left":[{"id":"f5130151-0c43-4857-a0fe-44400a42ff0f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"82a34ed5-e33b-4fe7-ae38-2c4ffec6f1f8","type":"LinearAxis"},{"id":"6bcbabb6-829e-4077-921b-4c16105dacc2","type":"Grid"},{"id":"f5130151-0c43-4857-a0fe-44400a42ff0f","type":"LinearAxis"},{"id":"d886730b-5042-473f-ac17-f777e9527112","type":"Grid"},{"id":"ec2de477-bc15-40d9-a7b1-68e916594700","type":"BoxAnnotation"},{"id":"14f8a40c-5b54-4ffc-8cf5-0893a2cdb3b8","type":"GlyphRenderer"}],"title":{"id":"42fb3fd0-06c5-4ebf-b32d-e1a4b30c407f","type":"Title"},"toolbar":{"id":"bf69723d-40fd-4612-8820-c414ebf43c9a","type":"Toolbar"},"x_range":{"id":"8acb7d50-81db-44bd-8de9-cd96efc7da7c","type":"DataRange1d"},"x_scale":{"id":"69547d12-1230-4a47-b273-360809f92398","type":"LinearScale"},"y_range":{"id":"0ec1a422-01bd-4425-8945-812e5f758d6a","type":"DataRange1d"},"y_scale":{"id":"d7016ab5-2cd3-4ea9-a256-5e56b7ca3dab","type":"LinearScale"}},"id":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec2de477-bc15-40d9-a7b1-68e916594700","type":"BoxAnnotation"},{"attributes":{},"id":"dd290b5e-6179-4fe3-8e85-020d53449fee","type":"ResetTool"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"42fb3fd0-06c5-4ebf-b32d-e1a4b30c407f","type":"Title"},{"attributes":{"callback":null},"id":"8acb7d50-81db-44bd-8de9-cd96efc7da7c","type":"DataRange1d"},{"attributes":{},"id":"952fb393-f6c3-4ad9-bc1a-5537f5fbe72d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0933922d-16fe-4c2c-a2d9-1f80e73830fd","type":"PanTool"},{"id":"5fc876a5-3e3f-41e6-af38-feb0540e73cd","type":"WheelZoomTool"},{"id":"d5360790-2e4b-4549-8b9a-003524c1e906","type":"BoxZoomTool"},{"id":"02208a9d-8538-42bf-b432-c3877c6ad0f9","type":"SaveTool"},{"id":"dd290b5e-6179-4fe3-8e85-020d53449fee","type":"ResetTool"},{"id":"4f81db26-10cf-4969-ab31-d4e7695525e4","type":"HelpTool"}]},"id":"bf69723d-40fd-4612-8820-c414ebf43c9a","type":"Toolbar"},{"attributes":{},"id":"69547d12-1230-4a47-b273-360809f92398","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"64a4d62e-7d03-476e-9b19-3b83102660bc","type":"Circle"},{"attributes":{"callback":null},"id":"0ec1a422-01bd-4425-8945-812e5f758d6a","type":"DataRange1d"},{"attributes":{},"id":"4f81db26-10cf-4969-ab31-d4e7695525e4","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753","subtype":"Figure","type":"Plot"},"ticker":{"id":"69660399-2921-44ec-906a-76d2e22901e9","type":"BasicTicker"}},"id":"d886730b-5042-473f-ac17-f777e9527112","type":"Grid"},{"attributes":{},"id":"d7016ab5-2cd3-4ea9-a256-5e56b7ca3dab","type":"LinearScale"},{"attributes":{},"id":"69660399-2921-44ec-906a-76d2e22901e9","type":"BasicTicker"},{"attributes":{},"id":"5fc876a5-3e3f-41e6-af38-feb0540e73cd","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2d69cca-23b1-4b70-bf7c-64efba9172a3","type":"BasicTicker"}},"id":"6bcbabb6-829e-4077-921b-4c16105dacc2","type":"Grid"},{"attributes":{},"id":"02208a9d-8538-42bf-b432-c3877c6ad0f9","type":"SaveTool"},{"attributes":{"formatter":{"id":"952fb393-f6c3-4ad9-bc1a-5537f5fbe72d","type":"BasicTickFormatter"},"plot":{"id":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2d69cca-23b1-4b70-bf7c-64efba9172a3","type":"BasicTicker"}},"id":"82a34ed5-e33b-4fe7-ae38-2c4ffec6f1f8","type":"LinearAxis"},{"attributes":{},"id":"9dd5c743-4d04-4d4c-a179-17b728aa8836","type":"BasicTickFormatter"},{"attributes":{},"id":"f2d69cca-23b1-4b70-bf7c-64efba9172a3","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"78e0695c-689c-403d-8c14-2ba7abb8e538","type":"Circle"},{"attributes":{"overlay":{"id":"ec2de477-bc15-40d9-a7b1-68e916594700","type":"BoxAnnotation"}},"id":"d5360790-2e4b-4549-8b9a-003524c1e906","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"9dd5c743-4d04-4d4c-a179-17b728aa8836","type":"BasicTickFormatter"},"plot":{"id":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753","subtype":"Figure","type":"Plot"},"ticker":{"id":"69660399-2921-44ec-906a-76d2e22901e9","type":"BasicTicker"}},"id":"f5130151-0c43-4857-a0fe-44400a42ff0f","type":"LinearAxis"},{"attributes":{"source":{"id":"51d86474-5d47-402c-a7f4-f52f270a24d9","type":"ColumnDataSource"}},"id":"7def34e0-4a40-4bc0-995e-b2b61f3d9235","type":"CDSView"}],"root_ids":["4ed8d686-8f12-4ae1-a258-3e2df5ccf753"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"574b7d75-94e5-4a5d-9163-38a3d848f46e","elementid":"36414dc4-b3f6-4557-9e1b-d7bfe1dbac5f","modelid":"4ed8d686-8f12-4ae1-a258-3e2df5ccf753"}];
                
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
