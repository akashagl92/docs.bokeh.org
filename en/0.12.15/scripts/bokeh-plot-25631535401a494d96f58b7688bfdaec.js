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
      };var element = document.getElementById("fb3bfa6a-7a4f-47ef-a615-9286c9d96008");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb3bfa6a-7a4f-47ef-a615-9286c9d96008' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"44474b21-e8ae-449a-a01f-d9f78803c8db":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"},"ticker":{"id":"4316c1ce-faa1-4a53-9cf6-8408d3fc63fc","type":"CategoricalTicker"}},"id":"1309abc1-e5ad-4002-bbbd-be8e63e450a5","type":"Grid"},{"attributes":{},"id":"570b01b1-9901-48a2-9292-400a3c6c70c9","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"30d0f6d9-dd92-41e4-9f72-9fa1ac1bdb8c","type":"VBar"},{"attributes":{"below":[{"id":"55277ac8-3055-4738-bc1a-ab8d1c046afc","type":"CategoricalAxis"}],"left":[{"id":"578797f5-75b4-443e-aa69-2c8a8d733354","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"55277ac8-3055-4738-bc1a-ab8d1c046afc","type":"CategoricalAxis"},{"id":"1309abc1-e5ad-4002-bbbd-be8e63e450a5","type":"Grid"},{"id":"578797f5-75b4-443e-aa69-2c8a8d733354","type":"LinearAxis"},{"id":"75bc6df3-27e0-4cf4-8ee5-a4928dd5ae05","type":"Grid"},{"id":"5ced0157-cc8f-4616-9a74-33f77084e1f6","type":"Legend"},{"id":"43e3e992-7b10-444c-93d4-062d53dd5607","type":"GlyphRenderer"}],"title":{"id":"6907b3b7-3b7c-4acb-9512-a78d12b866ef","type":"Title"},"toolbar":{"id":"2a11c11d-9dbb-4181-b6cb-8eb539533c5d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b8b536d9-9105-462d-bf82-6b29c088b49d","type":"FactorRange"},"x_scale":{"id":"04a9c89c-ed0f-497d-883f-0aeecb5b92c4","type":"CategoricalScale"},"y_range":{"id":"c1a3c587-1b96-412f-b690-092c7c70921a","type":"Range1d"},"y_scale":{"id":"570b01b1-9901-48a2-9292-400a3c6c70c9","type":"LinearScale"}},"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5a8358d4-1e77-44e9-833d-ae6e19b25a01","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"b8b536d9-9105-462d-bf82-6b29c088b49d","type":"FactorRange"},{"attributes":{"items":[{"id":"038f2a52-f21a-4711-b761-15e06c34fbf2","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"}},"id":"5ced0157-cc8f-4616-9a74-33f77084e1f6","type":"Legend"},{"attributes":{"data_source":{"id":"7d4e4275-6fc8-48c1-a4b2-fafe76e800dd","type":"ColumnDataSource"},"glyph":{"id":"2e536d74-59c1-4da3-a9a3-8f3646e2fa4f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30d0f6d9-dd92-41e4-9f72-9fa1ac1bdb8c","type":"VBar"},"selection_glyph":null,"view":{"id":"17d50b07-27c0-4779-ac95-890bdc21fda4","type":"CDSView"}},"id":"43e3e992-7b10-444c-93d4-062d53dd5607","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"7d4e4275-6fc8-48c1-a4b2-fafe76e800dd","type":"ColumnDataSource"},{"attributes":{},"id":"2127580c-b4d6-440f-9aec-635ca80814b9","type":"CategoricalTickFormatter"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"43e3e992-7b10-444c-93d4-062d53dd5607","type":"GlyphRenderer"}]},"id":"038f2a52-f21a-4711-b761-15e06c34fbf2","type":"LegendItem"},{"attributes":{"source":{"id":"7d4e4275-6fc8-48c1-a4b2-fafe76e800dd","type":"ColumnDataSource"}},"id":"17d50b07-27c0-4779-ac95-890bdc21fda4","type":"CDSView"},{"attributes":{},"id":"4316c1ce-faa1-4a53-9cf6-8408d3fc63fc","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"6907b3b7-3b7c-4acb-9512-a78d12b866ef","type":"Title"},{"attributes":{"callback":null,"end":9},"id":"c1a3c587-1b96-412f-b690-092c7c70921a","type":"Range1d"},{"attributes":{},"id":"3473edc9-1089-4e23-bdbb-f1387a6d621d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2127580c-b4d6-440f-9aec-635ca80814b9","type":"CategoricalTickFormatter"},"plot":{"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"},"ticker":{"id":"4316c1ce-faa1-4a53-9cf6-8408d3fc63fc","type":"CategoricalTicker"}},"id":"55277ac8-3055-4738-bc1a-ab8d1c046afc","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2a11c11d-9dbb-4181-b6cb-8eb539533c5d","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"},"ticker":{"id":"3473edc9-1089-4e23-bdbb-f1387a6d621d","type":"BasicTicker"}},"id":"75bc6df3-27e0-4cf4-8ee5-a4928dd5ae05","type":"Grid"},{"attributes":{"formatter":{"id":"5a8358d4-1e77-44e9-833d-ae6e19b25a01","type":"BasicTickFormatter"},"plot":{"id":"951e4953-0ff6-4691-8379-2613fedb7703","subtype":"Figure","type":"Plot"},"ticker":{"id":"3473edc9-1089-4e23-bdbb-f1387a6d621d","type":"BasicTicker"}},"id":"578797f5-75b4-443e-aa69-2c8a8d733354","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2e536d74-59c1-4da3-a9a3-8f3646e2fa4f","type":"VBar"},{"attributes":{},"id":"04a9c89c-ed0f-497d-883f-0aeecb5b92c4","type":"CategoricalScale"}],"root_ids":["951e4953-0ff6-4691-8379-2613fedb7703"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"44474b21-e8ae-449a-a01f-d9f78803c8db","elementid":"fb3bfa6a-7a4f-47ef-a615-9286c9d96008","modelid":"951e4953-0ff6-4691-8379-2613fedb7703"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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