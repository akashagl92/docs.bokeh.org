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
      };var element = document.getElementById("f09ff36f-a424-4dca-9322-338800f7aa9c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f09ff36f-a424-4dca-9322-338800f7aa9c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"0c995984-f0d7-4aa4-ad65-ae0ad49a1d1d":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0acc293f-8fac-4285-98be-7812ca618e28","type":"BoxAnnotation"},{"attributes":{},"id":"f00f7906-8b93-47f3-bb6a-ff4b04a37315","type":"PanTool"},{"attributes":{},"id":"817c2920-5d83-4472-9d0d-91eb9c82aa8f","type":"SaveTool"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"9f4d141b-d1fb-4a86-bc8d-43560b757c94","type":"GlyphRenderer"}]},"id":"ad9ca354-ff6d-4a09-bd61-63ff06c41273","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f00f7906-8b93-47f3-bb6a-ff4b04a37315","type":"PanTool"},{"id":"118fa67c-1e99-4469-8242-0b9e9c540198","type":"WheelZoomTool"},{"id":"0ca76c2c-0711-4f22-bd1d-a450159389be","type":"BoxZoomTool"},{"id":"817c2920-5d83-4472-9d0d-91eb9c82aa8f","type":"SaveTool"},{"id":"20b7a380-8bc1-41bb-ac11-cfa6811d1888","type":"ResetTool"},{"id":"9d04c792-91c9-44d3-8a07-0f4447526669","type":"HelpTool"}]},"id":"b2cd047b-a430-435d-ae99-3e92b32201f4","type":"Toolbar"},{"attributes":{},"id":"4b2ca318-5b33-49c6-addb-926556244fd5","type":"BasicTickFormatter"},{"attributes":{},"id":"20b7a380-8bc1-41bb-ac11-cfa6811d1888","type":"ResetTool"},{"attributes":{"source":{"id":"16aeaa0c-04bf-4256-9cad-4042578e91d5","type":"ColumnDataSource"}},"id":"315791a2-05d1-4eb8-b180-9fa2c7512bf5","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"},"ticker":{"id":"d75e3639-6a4c-4ee6-a102-6a12d6a9430a","type":"BasicTicker"}},"id":"f02bdc18-d890-4167-a6cb-2a3d5944a7b0","type":"Grid"},{"attributes":{"callback":null,"end":9,"start":0},"id":"d0da8b91-ea42-41c5-9d64-60ed619e6026","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c8d14e8f-e0d2-4cb5-bbbf-c7f1e8b1fd43","type":"CategoricalTickFormatter"},"plot":{"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f6d86bf-b234-44a1-9c03-cfa85682c0f3","type":"CategoricalTicker"}},"id":"05ed59dd-5d35-4ca2-8523-58673e3dca44","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"0acc293f-8fac-4285-98be-7812ca618e28","type":"BoxAnnotation"}},"id":"0ca76c2c-0711-4f22-bd1d-a450159389be","type":"BoxZoomTool"},{"attributes":{},"id":"a70cb2e2-4eba-484e-b94e-cd236745cbba","type":"CategoricalScale"},{"attributes":{},"id":"7ed419e2-5518-452c-bb42-fed31a44dfda","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"9ed1572a-e7c6-422c-8662-2f7ff859ba5f","type":"VBar"},{"attributes":{},"id":"637ebe25-ce25-4f62-9950-92096899c986","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"4e34b8b4-29b2-451c-8af8-c319593c3e2a","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3835e6af-8fee-4f4c-a909-55887d8827d9","type":"VBar"},{"attributes":{},"id":"d75e3639-6a4c-4ee6-a102-6a12d6a9430a","type":"BasicTicker"},{"attributes":{"below":[{"id":"05ed59dd-5d35-4ca2-8523-58673e3dca44","type":"CategoricalAxis"}],"left":[{"id":"63b04b6a-5e6a-422d-b692-8c5de7b5e539","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"05ed59dd-5d35-4ca2-8523-58673e3dca44","type":"CategoricalAxis"},{"id":"fa06520b-e87a-400a-bc6f-30c66d35e027","type":"Grid"},{"id":"63b04b6a-5e6a-422d-b692-8c5de7b5e539","type":"LinearAxis"},{"id":"f02bdc18-d890-4167-a6cb-2a3d5944a7b0","type":"Grid"},{"id":"0acc293f-8fac-4285-98be-7812ca618e28","type":"BoxAnnotation"},{"id":"d16aba54-bb5a-4549-9efe-2b1ca324a627","type":"Legend"},{"id":"9f4d141b-d1fb-4a86-bc8d-43560b757c94","type":"GlyphRenderer"}],"title":{"id":"b638d97d-9727-4ad5-a18c-3c3c063d5789","type":"Title"},"toolbar":{"id":"b2cd047b-a430-435d-ae99-3e92b32201f4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"785ee838-562b-47ff-be64-c96123dda5c3","type":"FactorRange"},"x_scale":{"id":"a70cb2e2-4eba-484e-b94e-cd236745cbba","type":"CategoricalScale"},"y_range":{"id":"d0da8b91-ea42-41c5-9d64-60ed619e6026","type":"DataRange1d"},"y_scale":{"id":"637ebe25-ce25-4f62-9950-92096899c986","type":"LinearScale"}},"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48954d35-79a1-415a-af15-584385130569","type":"Selection"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"785ee838-562b-47ff-be64-c96123dda5c3","type":"FactorRange"},{"attributes":{},"id":"9d04c792-91c9-44d3-8a07-0f4447526669","type":"HelpTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"4e34b8b4-29b2-451c-8af8-c319593c3e2a","type":"CategoricalColorMapper"},{"attributes":{"items":[{"id":"ad9ca354-ff6d-4a09-bd61-63ff06c41273","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"}},"id":"d16aba54-bb5a-4549-9efe-2b1ca324a627","type":"Legend"},{"attributes":{},"id":"c8d14e8f-e0d2-4cb5-bbbf-c7f1e8b1fd43","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f6d86bf-b234-44a1-9c03-cfa85682c0f3","type":"CategoricalTicker"}},"id":"fa06520b-e87a-400a-bc6f-30c66d35e027","type":"Grid"},{"attributes":{"data_source":{"id":"16aeaa0c-04bf-4256-9cad-4042578e91d5","type":"ColumnDataSource"},"glyph":{"id":"3835e6af-8fee-4f4c-a909-55887d8827d9","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9ed1572a-e7c6-422c-8662-2f7ff859ba5f","type":"VBar"},"selection_glyph":null,"view":{"id":"315791a2-05d1-4eb8-b180-9fa2c7512bf5","type":"CDSView"}},"id":"9f4d141b-d1fb-4a86-bc8d-43560b757c94","type":"GlyphRenderer"},{"attributes":{},"id":"1f6d86bf-b234-44a1-9c03-cfa85682c0f3","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"48954d35-79a1-415a-af15-584385130569","type":"Selection"},"selection_policy":{"id":"7ed419e2-5518-452c-bb42-fed31a44dfda","type":"UnionRenderers"}},"id":"16aeaa0c-04bf-4256-9cad-4042578e91d5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4b2ca318-5b33-49c6-addb-926556244fd5","type":"BasicTickFormatter"},"plot":{"id":"b3a5a6c3-362d-46af-9812-d0f5af768e94","subtype":"Figure","type":"Plot"},"ticker":{"id":"d75e3639-6a4c-4ee6-a102-6a12d6a9430a","type":"BasicTicker"}},"id":"63b04b6a-5e6a-422d-b692-8c5de7b5e539","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"b638d97d-9727-4ad5-a18c-3c3c063d5789","type":"Title"},{"attributes":{},"id":"118fa67c-1e99-4469-8242-0b9e9c540198","type":"WheelZoomTool"}],"root_ids":["b3a5a6c3-362d-46af-9812-d0f5af768e94"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"0c995984-f0d7-4aa4-ad65-ae0ad49a1d1d","elementid":"f09ff36f-a424-4dca-9322-338800f7aa9c","modelid":"b3a5a6c3-362d-46af-9812-d0f5af768e94"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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