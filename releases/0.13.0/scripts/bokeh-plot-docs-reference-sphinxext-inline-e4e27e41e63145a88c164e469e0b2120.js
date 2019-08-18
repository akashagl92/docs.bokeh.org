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
      };var element = document.getElementById("40de4288-add5-4b7e-b860-0cd9eeb32799");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '40de4288-add5-4b7e-b860-0cd9eeb32799' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"830e229e-2875-45bc-8688-372744469e08":{"roots":{"references":[{"attributes":{"source":{"id":"c6c357b9-c65b-4d0f-8a0c-42c3d1585d83","type":"ColumnDataSource"}},"id":"e5c15238-72aa-49ff-8837-2d4864ec4a72","type":"CDSView"},{"attributes":{"callback":null},"id":"8295e726-3500-4906-b4c9-304912281e94","type":"DataRange1d"},{"attributes":{},"id":"2a206199-9abc-43ba-a3df-0687d152b243","type":"SaveTool"},{"attributes":{"source":{"id":"cacc8da9-de7d-40d0-ab78-bc5393fbd555","type":"ColumnDataSource"}},"id":"3b4dcc93-1fd0-4380-8597-d72135a0311d","type":"CDSView"},{"attributes":{},"id":"590adc83-596c-480d-8def-de98c3b4edb6","type":"ResetTool"},{"attributes":{"below":[{"id":"3f83466e-742b-445d-a585-f8a7d097c95e","type":"LinearAxis"}],"left":[{"id":"d49a62a9-0c47-49b4-8592-8d88f519f292","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3f83466e-742b-445d-a585-f8a7d097c95e","type":"LinearAxis"},{"id":"d914a0df-ee61-4dc4-b16b-445ea6ff32f0","type":"Grid"},{"id":"d49a62a9-0c47-49b4-8592-8d88f519f292","type":"LinearAxis"},{"id":"89e65a3c-6802-4383-8677-9cf7d4221139","type":"Grid"},{"id":"96e1b79c-7b2f-4480-ad92-433b7de91726","type":"BoxAnnotation"},{"id":"e28fa5ae-a27d-4230-8ff7-91e90bcb9d5b","type":"GlyphRenderer"},{"id":"8778d0d5-e7b8-4dbe-8bc7-1ae2a072853e","type":"GlyphRenderer"}],"title":{"id":"d6187cc5-5a63-411c-ba7c-561b3d48524b","type":"Title"},"toolbar":{"id":"01c7ecdc-5b10-4d54-a052-cb74bbdf180d","type":"Toolbar"},"x_range":{"id":"8295e726-3500-4906-b4c9-304912281e94","type":"DataRange1d"},"x_scale":{"id":"199e2bc9-72a6-4f63-8b6c-37eda77bc9c3","type":"LinearScale"},"y_range":{"id":"e15097b7-6f46-476c-aaff-c1f89199183e","type":"DataRange1d"},"y_scale":{"id":"b4a02eb4-54b4-4b62-ae25-7b368947edff","type":"LinearScale"}},"id":"707f7d99-6d48-44cd-869f-4d377d7574be","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"707f7d99-6d48-44cd-869f-4d377d7574be","subtype":"Figure","type":"Plot"},"ticker":{"id":"97eedb5f-81bd-4de7-a313-20d85d01e913","type":"BasicTicker"}},"id":"d914a0df-ee61-4dc4-b16b-445ea6ff32f0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96e1b79c-7b2f-4480-ad92-433b7de91726","type":"BoxAnnotation"},{"attributes":{},"id":"ccef22c0-3866-4a75-b13f-8ab5dc222d54","type":"Selection"},{"attributes":{"callback":null},"id":"e15097b7-6f46-476c-aaff-c1f89199183e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e076cf1-5aa9-492d-b7a0-81ae61a867e4","type":"PanTool"},{"id":"389687ed-e269-458b-9bbc-4c79fb397984","type":"WheelZoomTool"},{"id":"c20106f2-dd38-4a70-8e51-11f1abf874c0","type":"BoxZoomTool"},{"id":"2a206199-9abc-43ba-a3df-0687d152b243","type":"SaveTool"},{"id":"590adc83-596c-480d-8def-de98c3b4edb6","type":"ResetTool"},{"id":"059e9fa6-7cf9-45e2-9ebd-b0761a2150c3","type":"HelpTool"}]},"id":"01c7ecdc-5b10-4d54-a052-cb74bbdf180d","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"582a4cb4-3dd3-47c6-a718-4a1a58706725","type":"Selection"},"selection_policy":{"id":"2f043c5b-a259-4a39-bc49-7cf5d1fcfeb4","type":"UnionRenderers"}},"id":"c6c357b9-c65b-4d0f-8a0c-42c3d1585d83","type":"ColumnDataSource"},{"attributes":{},"id":"199e2bc9-72a6-4f63-8b6c-37eda77bc9c3","type":"LinearScale"},{"attributes":{"overlay":{"id":"96e1b79c-7b2f-4480-ad92-433b7de91726","type":"BoxAnnotation"}},"id":"c20106f2-dd38-4a70-8e51-11f1abf874c0","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"cacc8da9-de7d-40d0-ab78-bc5393fbd555","type":"ColumnDataSource"},"glyph":{"id":"33900ddc-a451-4e5c-8028-8b634a35529b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3502665a-b783-4125-9972-12a33243013f","type":"Circle"},"selection_glyph":null,"view":{"id":"3b4dcc93-1fd0-4380-8597-d72135a0311d","type":"CDSView"}},"id":"8778d0d5-e7b8-4dbe-8bc7-1ae2a072853e","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"example"},"id":"d6187cc5-5a63-411c-ba7c-561b3d48524b","type":"Title"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33900ddc-a451-4e5c-8028-8b634a35529b","type":"Circle"},{"attributes":{},"id":"2f043c5b-a259-4a39-bc49-7cf5d1fcfeb4","type":"UnionRenderers"},{"attributes":{},"id":"b4a02eb4-54b4-4b62-ae25-7b368947edff","type":"LinearScale"},{"attributes":{},"id":"0a9b56ba-9639-4195-bcef-aa8fd7a2723c","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4102677f-75d7-4133-8e4c-1fe7e8dd2a56","type":"Line"},{"attributes":{},"id":"550a7f92-178a-4b01-91ec-da416e0d35b6","type":"BasicTicker"},{"attributes":{},"id":"582a4cb4-3dd3-47c6-a718-4a1a58706725","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"a4edda7b-f7f7-4fb0-aa18-c21a025f0ae4","type":"Line"},{"attributes":{},"id":"bd97f9fe-8b6c-4c72-a02f-44e6ef108481","type":"BasicTickFormatter"},{"attributes":{},"id":"e37543ff-4710-4280-beda-dbd825da7ee6","type":"UnionRenderers"},{"attributes":{},"id":"059e9fa6-7cf9-45e2-9ebd-b0761a2150c3","type":"HelpTool"},{"attributes":{},"id":"389687ed-e269-458b-9bbc-4c79fb397984","type":"WheelZoomTool"},{"attributes":{},"id":"97eedb5f-81bd-4de7-a313-20d85d01e913","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"ccef22c0-3866-4a75-b13f-8ab5dc222d54","type":"Selection"},"selection_policy":{"id":"e37543ff-4710-4280-beda-dbd825da7ee6","type":"UnionRenderers"}},"id":"cacc8da9-de7d-40d0-ab78-bc5393fbd555","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3502665a-b783-4125-9972-12a33243013f","type":"Circle"},{"attributes":{"formatter":{"id":"bd97f9fe-8b6c-4c72-a02f-44e6ef108481","type":"BasicTickFormatter"},"plot":{"id":"707f7d99-6d48-44cd-869f-4d377d7574be","subtype":"Figure","type":"Plot"},"ticker":{"id":"97eedb5f-81bd-4de7-a313-20d85d01e913","type":"BasicTicker"}},"id":"3f83466e-742b-445d-a585-f8a7d097c95e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c6c357b9-c65b-4d0f-8a0c-42c3d1585d83","type":"ColumnDataSource"},"glyph":{"id":"a4edda7b-f7f7-4fb0-aa18-c21a025f0ae4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4102677f-75d7-4133-8e4c-1fe7e8dd2a56","type":"Line"},"selection_glyph":null,"view":{"id":"e5c15238-72aa-49ff-8837-2d4864ec4a72","type":"CDSView"}},"id":"e28fa5ae-a27d-4230-8ff7-91e90bcb9d5b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"707f7d99-6d48-44cd-869f-4d377d7574be","subtype":"Figure","type":"Plot"},"ticker":{"id":"550a7f92-178a-4b01-91ec-da416e0d35b6","type":"BasicTicker"}},"id":"89e65a3c-6802-4383-8677-9cf7d4221139","type":"Grid"},{"attributes":{"formatter":{"id":"0a9b56ba-9639-4195-bcef-aa8fd7a2723c","type":"BasicTickFormatter"},"plot":{"id":"707f7d99-6d48-44cd-869f-4d377d7574be","subtype":"Figure","type":"Plot"},"ticker":{"id":"550a7f92-178a-4b01-91ec-da416e0d35b6","type":"BasicTicker"}},"id":"d49a62a9-0c47-49b4-8592-8d88f519f292","type":"LinearAxis"},{"attributes":{},"id":"0e076cf1-5aa9-492d-b7a0-81ae61a867e4","type":"PanTool"}],"root_ids":["707f7d99-6d48-44cd-869f-4d377d7574be"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"830e229e-2875-45bc-8688-372744469e08","roots":{"707f7d99-6d48-44cd-869f-4d377d7574be":"40de4288-add5-4b7e-b860-0cd9eeb32799"}}];
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