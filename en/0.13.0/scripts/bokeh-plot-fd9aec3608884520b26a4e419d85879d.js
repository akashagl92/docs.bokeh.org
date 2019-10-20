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
      };var element = document.getElementById("356b4fab-be4d-4050-8a1f-bcd3f7d21b46");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '356b4fab-be4d-4050-8a1f-bcd3f7d21b46' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5181066f-e980-4363-aed0-5c8b7492adeb":{"roots":{"references":[{"attributes":{"formatter":{"id":"6e5ad3d6-695c-4da4-b42c-57018b8935e0","type":"BasicTickFormatter"},"plot":{"id":"4a627439-6ca6-48cd-bee0-c7270a0a13a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"559ddbc5-50ae-46f4-93ab-4866cabb29c9","type":"BasicTicker"}},"id":"346b08b2-1b4b-4016-ae67-f11273f7b4c1","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"fa2d5def-3ecd-46dd-a994-593ae3e2f5b5","type":"Toolbar"},{"attributes":{},"id":"7e18f776-06eb-4f12-b95a-ac92d0687349","type":"Selection"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"7e18f776-06eb-4f12-b95a-ac92d0687349","type":"Selection"},"selection_policy":{"id":"6a618311-ada4-495b-b676-3e756fa814c4","type":"UnionRenderers"}},"id":"899961c9-af57-4483-91a9-27e8d42d702e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"290b5a77-0a8d-482c-9a98-dd99a815e159","type":"VBar"},{"attributes":{},"id":"6a618311-ada4-495b-b676-3e756fa814c4","type":"UnionRenderers"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"4a627439-6ca6-48cd-bee0-c7270a0a13a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a7554cc-8b49-406f-922e-d2fa423e15a2","type":"CategoricalTicker"}},"id":"ace8b18f-f39d-4fb5-8ada-265537ea60c8","type":"Grid"},{"attributes":{},"id":"95de6fb4-e7a2-4c84-918b-367dfda4e8a8","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"06620b23-9e01-48ae-80cc-a61adcb90a35","type":"ColumnDataSource"},"glyph":{"id":"25085386-0b61-4313-8f78-74fb4d02bff0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46880942-1a68-438c-9293-8f60571bc0dd","type":"Line"},"selection_glyph":null,"view":{"id":"a3fa94ec-fe7f-4147-810d-020082b1bc5f","type":"CDSView"}},"id":"9539f4f2-0903-4ad4-9f0d-88b6d7d05f49","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c0c8ab33-2c0d-4d53-94bc-2aeb7e1071e5","type":"CategoricalAxis"}],"left":[{"id":"346b08b2-1b4b-4016-ae67-f11273f7b4c1","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"c0c8ab33-2c0d-4d53-94bc-2aeb7e1071e5","type":"CategoricalAxis"},{"id":"ace8b18f-f39d-4fb5-8ada-265537ea60c8","type":"Grid"},{"id":"346b08b2-1b4b-4016-ae67-f11273f7b4c1","type":"LinearAxis"},{"id":"4c12cd6b-1b8c-4cc2-8cf0-a5ce8ac68248","type":"Grid"},{"id":"b7238bf4-19f7-4924-80f3-545f1b6a059c","type":"GlyphRenderer"},{"id":"9539f4f2-0903-4ad4-9f0d-88b6d7d05f49","type":"GlyphRenderer"}],"title":{"id":"56bf2731-2ea5-4a97-a43c-1950d2e620c6","type":"Title"},"toolbar":{"id":"fa2d5def-3ecd-46dd-a994-593ae3e2f5b5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7654f3f3-f309-4a26-910a-11c758d64b6f","type":"FactorRange"},"x_scale":{"id":"7f6256dd-6c9f-4902-8940-6327045bb5e2","type":"CategoricalScale"},"y_range":{"id":"6aa83dd2-d502-422d-ad77-86539f25a85c","type":"DataRange1d"},"y_scale":{"id":"2428d1a1-548e-45f1-9ae2-ccade8627752","type":"LinearScale"}},"id":"4a627439-6ca6-48cd-bee0-c7270a0a13a0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"6aa83dd2-d502-422d-ad77-86539f25a85c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"551de483-2389-4f8b-9c82-34a41b08d799","type":"VBar"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25085386-0b61-4313-8f78-74fb4d02bff0","type":"Line"},{"attributes":{},"id":"3a7554cc-8b49-406f-922e-d2fa423e15a2","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"4a627439-6ca6-48cd-bee0-c7270a0a13a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"559ddbc5-50ae-46f4-93ab-4866cabb29c9","type":"BasicTicker"}},"id":"4c12cd6b-1b8c-4cc2-8cf0-a5ce8ac68248","type":"Grid"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"7654f3f3-f309-4a26-910a-11c758d64b6f","type":"FactorRange"},{"attributes":{"plot":null,"text":""},"id":"56bf2731-2ea5-4a97-a43c-1950d2e620c6","type":"Title"},{"attributes":{},"id":"6e5ad3d6-695c-4da4-b42c-57018b8935e0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"06620b23-9e01-48ae-80cc-a61adcb90a35","type":"ColumnDataSource"}},"id":"a3fa94ec-fe7f-4147-810d-020082b1bc5f","type":"CDSView"},{"attributes":{},"id":"559ddbc5-50ae-46f4-93ab-4866cabb29c9","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"46880942-1a68-438c-9293-8f60571bc0dd","type":"Line"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"162f7d45-8324-4095-8e97-44ff599af4a4","type":"Selection"},"selection_policy":{"id":"332ae62a-0404-4fe9-861a-9ad0fd1a27f6","type":"UnionRenderers"}},"id":"06620b23-9e01-48ae-80cc-a61adcb90a35","type":"ColumnDataSource"},{"attributes":{},"id":"162f7d45-8324-4095-8e97-44ff599af4a4","type":"Selection"},{"attributes":{"source":{"id":"899961c9-af57-4483-91a9-27e8d42d702e","type":"ColumnDataSource"}},"id":"8f0045ea-1b32-40e5-8dbf-c777e0d1b73b","type":"CDSView"},{"attributes":{},"id":"332ae62a-0404-4fe9-861a-9ad0fd1a27f6","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"899961c9-af57-4483-91a9-27e8d42d702e","type":"ColumnDataSource"},"glyph":{"id":"551de483-2389-4f8b-9c82-34a41b08d799","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"290b5a77-0a8d-482c-9a98-dd99a815e159","type":"VBar"},"selection_glyph":null,"view":{"id":"8f0045ea-1b32-40e5-8dbf-c777e0d1b73b","type":"CDSView"}},"id":"b7238bf4-19f7-4924-80f3-545f1b6a059c","type":"GlyphRenderer"},{"attributes":{},"id":"2428d1a1-548e-45f1-9ae2-ccade8627752","type":"LinearScale"},{"attributes":{},"id":"7f6256dd-6c9f-4902-8940-6327045bb5e2","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"95de6fb4-e7a2-4c84-918b-367dfda4e8a8","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"4a627439-6ca6-48cd-bee0-c7270a0a13a0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a7554cc-8b49-406f-922e-d2fa423e15a2","type":"CategoricalTicker"}},"id":"c0c8ab33-2c0d-4d53-94bc-2aeb7e1071e5","type":"CategoricalAxis"}],"root_ids":["4a627439-6ca6-48cd-bee0-c7270a0a13a0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5181066f-e980-4363-aed0-5c8b7492adeb","roots":{"4a627439-6ca6-48cd-bee0-c7270a0a13a0":"356b4fab-be4d-4050-8a1f-bcd3f7d21b46"}}];
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