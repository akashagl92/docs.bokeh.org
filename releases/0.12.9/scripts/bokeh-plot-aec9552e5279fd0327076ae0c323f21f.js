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
      };var element = document.getElementById("379c39ba-262d-4d10-9268-f0ba264ab991");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '379c39ba-262d-4d10-9268-f0ba264ab991' but no matching script tag was found. ")
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
                    var docs_json = {"66f72c96-86ab-45c6-89d6-78e13b13e68d":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dc36c0e-75b7-40a5-b248-52312e1e9910","type":"BasicTicker"}},"id":"78df634e-d39a-4ace-b580-133c1159910c","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"57ec0eb7-94a1-429c-a195-472fdc4e4391","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"40497747-c240-45ca-8267-f66efeca4cd4","type":"LinearAxis"}],"left":[{"id":"97308dd2-9b5e-4fd6-8f58-4e92eab875ec","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"40497747-c240-45ca-8267-f66efeca4cd4","type":"LinearAxis"},{"id":"a7af2cdc-cc65-4a62-95cc-bda496b6c1aa","type":"Grid"},{"id":"97308dd2-9b5e-4fd6-8f58-4e92eab875ec","type":"LinearAxis"},{"id":"78df634e-d39a-4ace-b580-133c1159910c","type":"Grid"},{"id":"9750cde9-1149-4d04-b887-906c0def2c3d","type":"BoxAnnotation"},{"id":"31300812-3005-4a43-bdea-753872d01fcf","type":"GlyphRenderer"}],"title":{"id":"0c49598d-a5ff-4ece-89b5-15b286e6f0a1","type":"Title"},"toolbar":{"id":"104a5ae9-efe4-41cc-819b-2e3a6add66cc","type":"Toolbar"},"x_range":{"id":"93918ccc-36a0-45e8-92a2-7d648167baf1","type":"DataRange1d"},"x_scale":{"id":"ab92ab84-6905-4882-aa37-d054229bcdb7","type":"LinearScale"},"y_range":{"id":"b3bd7e3c-103b-4f8a-9c3a-8a01772b15f7","type":"DataRange1d"},"y_scale":{"id":"904567ca-a6bb-44f1-b974-a5f3fb6be05e","type":"LinearScale"}},"id":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ad84503-b8a6-43cd-a4c2-f634ecc88209","type":"BasicTicker"}},"id":"a7af2cdc-cc65-4a62-95cc-bda496b6c1aa","type":"Grid"},{"attributes":{"callback":null},"id":"93918ccc-36a0-45e8-92a2-7d648167baf1","type":"DataRange1d"},{"attributes":{},"id":"a1ae54aa-13a8-43b1-86eb-f15e3c000da7","type":"PanTool"},{"attributes":{"overlay":{"id":"9750cde9-1149-4d04-b887-906c0def2c3d","type":"BoxAnnotation"}},"id":"e1b7a97a-6a54-4272-b6bc-97ff060ea6aa","type":"BoxZoomTool"},{"attributes":{},"id":"5dc36c0e-75b7-40a5-b248-52312e1e9910","type":"BasicTicker"},{"attributes":{},"id":"4ad84503-b8a6-43cd-a4c2-f634ecc88209","type":"BasicTicker"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"1ec07246-ee1b-44f7-9553-ab17ccc5c256","type":"BasicTickFormatter"},"plot":{"id":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ad84503-b8a6-43cd-a4c2-f634ecc88209","type":"BasicTicker"}},"id":"40497747-c240-45ca-8267-f66efeca4cd4","type":"LinearAxis"},{"attributes":{},"id":"3a207e7e-0f03-4495-9f1d-9c1134952c3d","type":"HelpTool"},{"attributes":{"data_source":{"id":"57ec0eb7-94a1-429c-a195-472fdc4e4391","type":"ColumnDataSource"},"glyph":{"id":"591142e2-11ff-4064-b0a3-eef58c26e5d9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8d1aa2e-2c8f-458b-8c8f-277e419276a6","type":"Circle"},"selection_glyph":null,"view":{"id":"b3908996-0998-4b86-ba2f-5a7d09b374a6","type":"CDSView"}},"id":"31300812-3005-4a43-bdea-753872d01fcf","type":"GlyphRenderer"},{"attributes":{},"id":"1ec07246-ee1b-44f7-9553-ab17ccc5c256","type":"BasicTickFormatter"},{"attributes":{},"id":"ba304080-3909-4132-bf70-4979dac8a973","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"0c49598d-a5ff-4ece-89b5-15b286e6f0a1","type":"Title"},{"attributes":{},"id":"900d877d-3d59-4b34-9096-009b877ab1c0","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9750cde9-1149-4d04-b887-906c0def2c3d","type":"BoxAnnotation"},{"attributes":{},"id":"3b44df15-0d8a-4c68-95bf-7f8598666d36","type":"ResetTool"},{"attributes":{},"id":"e18bbc63-1b38-48fa-9593-85487a3ca6f7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8d1aa2e-2c8f-458b-8c8f-277e419276a6","type":"Circle"},{"attributes":{"callback":null},"id":"b3bd7e3c-103b-4f8a-9c3a-8a01772b15f7","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1ae54aa-13a8-43b1-86eb-f15e3c000da7","type":"PanTool"},{"id":"900d877d-3d59-4b34-9096-009b877ab1c0","type":"WheelZoomTool"},{"id":"e1b7a97a-6a54-4272-b6bc-97ff060ea6aa","type":"BoxZoomTool"},{"id":"ba304080-3909-4132-bf70-4979dac8a973","type":"SaveTool"},{"id":"3b44df15-0d8a-4c68-95bf-7f8598666d36","type":"ResetTool"},{"id":"3a207e7e-0f03-4495-9f1d-9c1134952c3d","type":"HelpTool"}]},"id":"104a5ae9-efe4-41cc-819b-2e3a6add66cc","type":"Toolbar"},{"attributes":{"source":{"id":"57ec0eb7-94a1-429c-a195-472fdc4e4391","type":"ColumnDataSource"}},"id":"b3908996-0998-4b86-ba2f-5a7d09b374a6","type":"CDSView"},{"attributes":{},"id":"ab92ab84-6905-4882-aa37-d054229bcdb7","type":"LinearScale"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"e18bbc63-1b38-48fa-9593-85487a3ca6f7","type":"BasicTickFormatter"},"plot":{"id":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec","subtype":"Figure","type":"Plot"},"ticker":{"id":"5dc36c0e-75b7-40a5-b248-52312e1e9910","type":"BasicTicker"}},"id":"97308dd2-9b5e-4fd6-8f58-4e92eab875ec","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"591142e2-11ff-4064-b0a3-eef58c26e5d9","type":"Circle"},{"attributes":{},"id":"904567ca-a6bb-44f1-b974-a5f3fb6be05e","type":"LinearScale"}],"root_ids":["5a8cfdf2-5006-41c1-aaac-cfba8d1624ec"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"66f72c96-86ab-45c6-89d6-78e13b13e68d","elementid":"379c39ba-262d-4d10-9268-f0ba264ab991","modelid":"5a8cfdf2-5006-41c1-aaac-cfba8d1624ec"}];
                
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
