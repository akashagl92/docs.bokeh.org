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
      };var element = document.getElementById("b91d0559-1ced-4602-9d9f-e2f5af57e02c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b91d0559-1ced-4602-9d9f-e2f5af57e02c' but no matching script tag was found. ")
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
                    var docs_json = {"29cdbbbb-0504-470e-a579-b97c2c787b6f":{"roots":{"references":[{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"c5f8e1e3-60c4-42b5-bc5b-658c83e7cd3c","type":"VBar"},{"attributes":{},"id":"a7f5f65c-72d9-45d3-9cd4-48f4d99432cb","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"923c5149-6f9a-47c9-a6f3-48b7f6661408","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6693cb79-a973-44a3-a896-e6fd0c7888e6","type":"LinearAxis"}],"left":[{"id":"01040b49-fd85-4260-ae8c-45a400c64ecb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6693cb79-a973-44a3-a896-e6fd0c7888e6","type":"LinearAxis"},{"id":"41d9c23a-5afd-4846-9ddf-51c9a719114c","type":"Grid"},{"id":"01040b49-fd85-4260-ae8c-45a400c64ecb","type":"LinearAxis"},{"id":"b3491bf1-b6d8-4518-b6a2-fc372398cf26","type":"Grid"},{"id":"923c5149-6f9a-47c9-a6f3-48b7f6661408","type":"BoxAnnotation"},{"id":"77334a25-b098-4d33-a96e-5524256de0c3","type":"GlyphRenderer"}],"title":{"id":"84b728d9-ef59-4367-ab2d-65e1addb6f76","type":"Title"},"toolbar":{"id":"27ba1561-816c-45fe-a444-cccc61f02461","type":"Toolbar"},"x_range":{"id":"da1283fe-8eb1-427f-9b37-45c837562f03","type":"DataRange1d"},"x_scale":{"id":"b1f11f30-7f08-4cac-abe5-889aa8c51c72","type":"LinearScale"},"y_range":{"id":"29d959c3-c111-481f-8872-cdd6f9da0a85","type":"DataRange1d"},"y_scale":{"id":"c3c4e460-02cf-4f62-a16c-78081930d3d5","type":"LinearScale"}},"id":"f675e03a-1863-4166-b081-8a6d84d6b2e5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"64192c48-8273-417d-ac68-434dab35a627","type":"SaveTool"},{"attributes":{"callback":null},"id":"da1283fe-8eb1-427f-9b37-45c837562f03","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a7f5f65c-72d9-45d3-9cd4-48f4d99432cb","type":"BasicTickFormatter"},"plot":{"id":"f675e03a-1863-4166-b081-8a6d84d6b2e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"65427bce-306d-4fe9-bff5-b8a22deee385","type":"BasicTicker"}},"id":"6693cb79-a973-44a3-a896-e6fd0c7888e6","type":"LinearAxis"},{"attributes":{},"id":"85dd46a7-823c-413e-87b2-b1cd90b0b514","type":"ResetTool"},{"attributes":{},"id":"76c268dd-4180-46da-8470-854e9b588fd6","type":"BasicTickFormatter"},{"attributes":{},"id":"ae6322c3-571e-415e-839c-cf439928b409","type":"BasicTicker"},{"attributes":{"plot":{"id":"f675e03a-1863-4166-b081-8a6d84d6b2e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"65427bce-306d-4fe9-bff5-b8a22deee385","type":"BasicTicker"}},"id":"41d9c23a-5afd-4846-9ddf-51c9a719114c","type":"Grid"},{"attributes":{},"id":"7196191b-41d3-4eea-8c4d-099130614faa","type":"HelpTool"},{"attributes":{"source":{"id":"441f4bdf-0bba-4abc-ad9c-ad492e8946b4","type":"ColumnDataSource"}},"id":"8799c1d3-963e-4e2f-9cee-e845dc48fbea","type":"CDSView"},{"attributes":{},"id":"c3c4e460-02cf-4f62-a16c-78081930d3d5","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"441f4bdf-0bba-4abc-ad9c-ad492e8946b4","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"84b728d9-ef59-4367-ab2d-65e1addb6f76","type":"Title"},{"attributes":{"callback":null},"id":"29d959c3-c111-481f-8872-cdd6f9da0a85","type":"DataRange1d"},{"attributes":{},"id":"65427bce-306d-4fe9-bff5-b8a22deee385","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"fa761708-7570-4391-ba01-823a494f7d0c","type":"VBar"},{"attributes":{"formatter":{"id":"76c268dd-4180-46da-8470-854e9b588fd6","type":"BasicTickFormatter"},"plot":{"id":"f675e03a-1863-4166-b081-8a6d84d6b2e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae6322c3-571e-415e-839c-cf439928b409","type":"BasicTicker"}},"id":"01040b49-fd85-4260-ae8c-45a400c64ecb","type":"LinearAxis"},{"attributes":{},"id":"928dd134-f2f2-4b29-8d5c-48ab0aeb36df","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"f675e03a-1863-4166-b081-8a6d84d6b2e5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae6322c3-571e-415e-839c-cf439928b409","type":"BasicTicker"}},"id":"b3491bf1-b6d8-4518-b6a2-fc372398cf26","type":"Grid"},{"attributes":{"overlay":{"id":"923c5149-6f9a-47c9-a6f3-48b7f6661408","type":"BoxAnnotation"}},"id":"6fedb045-a927-4182-870e-a368fc6e886e","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5394341b-007a-4820-bf8a-e9528490221d","type":"PanTool"},{"id":"928dd134-f2f2-4b29-8d5c-48ab0aeb36df","type":"WheelZoomTool"},{"id":"6fedb045-a927-4182-870e-a368fc6e886e","type":"BoxZoomTool"},{"id":"64192c48-8273-417d-ac68-434dab35a627","type":"SaveTool"},{"id":"85dd46a7-823c-413e-87b2-b1cd90b0b514","type":"ResetTool"},{"id":"7196191b-41d3-4eea-8c4d-099130614faa","type":"HelpTool"}]},"id":"27ba1561-816c-45fe-a444-cccc61f02461","type":"Toolbar"},{"attributes":{},"id":"5394341b-007a-4820-bf8a-e9528490221d","type":"PanTool"},{"attributes":{"data_source":{"id":"441f4bdf-0bba-4abc-ad9c-ad492e8946b4","type":"ColumnDataSource"},"glyph":{"id":"c5f8e1e3-60c4-42b5-bc5b-658c83e7cd3c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa761708-7570-4391-ba01-823a494f7d0c","type":"VBar"},"selection_glyph":null,"view":{"id":"8799c1d3-963e-4e2f-9cee-e845dc48fbea","type":"CDSView"}},"id":"77334a25-b098-4d33-a96e-5524256de0c3","type":"GlyphRenderer"},{"attributes":{},"id":"b1f11f30-7f08-4cac-abe5-889aa8c51c72","type":"LinearScale"}],"root_ids":["f675e03a-1863-4166-b081-8a6d84d6b2e5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"29cdbbbb-0504-470e-a579-b97c2c787b6f","elementid":"b91d0559-1ced-4602-9d9f-e2f5af57e02c","modelid":"f675e03a-1863-4166-b081-8a6d84d6b2e5"}];
                
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
