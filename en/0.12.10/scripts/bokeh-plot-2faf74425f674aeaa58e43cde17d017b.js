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
      };var element = document.getElementById("aec3c4c6-d152-4059-baa7-dc710ccee7e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aec3c4c6-d152-4059-baa7-dc710ccee7e7' but no matching script tag was found. ")
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
                    var docs_json = {"d0d6bc77-1660-4409-b2a2-38d9c34a4de0":{"roots":{"references":[{"attributes":{"formatter":{"id":"2a8bef3d-29bc-478d-a263-8f3e6a927ac9","type":"BasicTickFormatter"},"plot":{"id":"8641bc08-0750-4b1b-ab02-fcd7363504f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"678ca982-a72f-45ba-903c-95def57f6aea","type":"BasicTicker"}},"id":"74a21e1f-3f44-4f54-804c-76f87aec69d6","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"13fa4489-f001-4c28-bbb3-b0eb1556f20e","type":"ColumnDataSource"},{"attributes":{},"id":"678ca982-a72f-45ba-903c-95def57f6aea","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e75f1962-5433-41e4-9f12-41f1dab783f7","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"8641bc08-0750-4b1b-ab02-fcd7363504f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"678ca982-a72f-45ba-903c-95def57f6aea","type":"BasicTicker"}},"id":"4581620f-7695-43f2-9d3e-80ed28168474","type":"Grid"},{"attributes":{},"id":"f19861f9-dfc4-4808-b986-adf70e549a76","type":"BasicTicker"},{"attributes":{},"id":"081d2992-8287-4cb1-bd2a-051067fa274b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8c69b825-a7f9-4b33-9a69-e40dd9c762b0","type":"DataRange1d"},{"attributes":{},"id":"2a8bef3d-29bc-478d-a263-8f3e6a927ac9","type":"BasicTickFormatter"},{"attributes":{},"id":"4fc09686-95da-4776-a527-480b37166498","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1013ad31-0209-4ed0-aac3-882e2584e9a5","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3b1db96a-a2f5-4196-a674-00d8c753dcd4","type":"PanTool"},{"id":"467cf1df-01cb-401d-b3bb-ea1f5e4d31de","type":"WheelZoomTool"},{"id":"d0f3a163-324e-4822-9529-01ecdfae7567","type":"BoxZoomTool"},{"id":"1dd9d134-df53-414f-84cb-98c5f7dada95","type":"SaveTool"},{"id":"4fc09686-95da-4776-a527-480b37166498","type":"ResetTool"},{"id":"11d28371-103b-4d73-a8bf-825fc883d277","type":"HelpTool"}]},"id":"9b681bd2-e42c-4da9-9622-1b628ee7180a","type":"Toolbar"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"8085f0d6-cc5e-49a3-9f9f-46d4443f9e3b","type":"Title"},{"attributes":{"callback":null},"id":"a429038b-887e-4d13-bfcf-bed240cb05d7","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb0af6e6-ab3a-4143-94ad-9ed97b89952b","type":"Circle"},{"attributes":{"formatter":{"id":"081d2992-8287-4cb1-bd2a-051067fa274b","type":"BasicTickFormatter"},"plot":{"id":"8641bc08-0750-4b1b-ab02-fcd7363504f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f19861f9-dfc4-4808-b986-adf70e549a76","type":"BasicTicker"}},"id":"f710958a-024c-4ec7-83a8-981388ac671d","type":"LinearAxis"},{"attributes":{"source":{"id":"13fa4489-f001-4c28-bbb3-b0eb1556f20e","type":"ColumnDataSource"}},"id":"70069bd2-a6f6-4cb0-b4c4-7154e6b9c131","type":"CDSView"},{"attributes":{},"id":"3f5c6ba3-c66e-438b-ba3b-0d9934a7c143","type":"LinearScale"},{"attributes":{},"id":"3b1db96a-a2f5-4196-a674-00d8c753dcd4","type":"PanTool"},{"attributes":{},"id":"1dd9d134-df53-414f-84cb-98c5f7dada95","type":"SaveTool"},{"attributes":{"overlay":{"id":"e75f1962-5433-41e4-9f12-41f1dab783f7","type":"BoxAnnotation"}},"id":"d0f3a163-324e-4822-9529-01ecdfae7567","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"13fa4489-f001-4c28-bbb3-b0eb1556f20e","type":"ColumnDataSource"},"glyph":{"id":"cb0af6e6-ab3a-4143-94ad-9ed97b89952b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1013ad31-0209-4ed0-aac3-882e2584e9a5","type":"Circle"},"selection_glyph":null,"view":{"id":"70069bd2-a6f6-4cb0-b4c4-7154e6b9c131","type":"CDSView"}},"id":"9476d459-c64e-434e-9da5-08aee6885473","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f710958a-024c-4ec7-83a8-981388ac671d","type":"LinearAxis"}],"left":[{"id":"74a21e1f-3f44-4f54-804c-76f87aec69d6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f710958a-024c-4ec7-83a8-981388ac671d","type":"LinearAxis"},{"id":"70fbd90a-cc1b-4403-b6ea-19132e1035b5","type":"Grid"},{"id":"74a21e1f-3f44-4f54-804c-76f87aec69d6","type":"LinearAxis"},{"id":"4581620f-7695-43f2-9d3e-80ed28168474","type":"Grid"},{"id":"e75f1962-5433-41e4-9f12-41f1dab783f7","type":"BoxAnnotation"},{"id":"9476d459-c64e-434e-9da5-08aee6885473","type":"GlyphRenderer"}],"title":{"id":"8085f0d6-cc5e-49a3-9f9f-46d4443f9e3b","type":"Title"},"toolbar":{"id":"9b681bd2-e42c-4da9-9622-1b628ee7180a","type":"Toolbar"},"x_range":{"id":"8c69b825-a7f9-4b33-9a69-e40dd9c762b0","type":"DataRange1d"},"x_scale":{"id":"3f5c6ba3-c66e-438b-ba3b-0d9934a7c143","type":"LinearScale"},"y_range":{"id":"a429038b-887e-4d13-bfcf-bed240cb05d7","type":"DataRange1d"},"y_scale":{"id":"72b330e8-df0b-4ed3-889a-bacb2fc8f702","type":"LinearScale"}},"id":"8641bc08-0750-4b1b-ab02-fcd7363504f0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"8641bc08-0750-4b1b-ab02-fcd7363504f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f19861f9-dfc4-4808-b986-adf70e549a76","type":"BasicTicker"}},"id":"70fbd90a-cc1b-4403-b6ea-19132e1035b5","type":"Grid"},{"attributes":{},"id":"72b330e8-df0b-4ed3-889a-bacb2fc8f702","type":"LinearScale"},{"attributes":{},"id":"11d28371-103b-4d73-a8bf-825fc883d277","type":"HelpTool"},{"attributes":{},"id":"467cf1df-01cb-401d-b3bb-ea1f5e4d31de","type":"WheelZoomTool"}],"root_ids":["8641bc08-0750-4b1b-ab02-fcd7363504f0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d0d6bc77-1660-4409-b2a2-38d9c34a4de0","elementid":"aec3c4c6-d152-4059-baa7-dc710ccee7e7","modelid":"8641bc08-0750-4b1b-ab02-fcd7363504f0"}];
                
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
