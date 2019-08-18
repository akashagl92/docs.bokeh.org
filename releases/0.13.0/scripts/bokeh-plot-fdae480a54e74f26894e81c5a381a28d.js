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
      };var element = document.getElementById("84e45a21-39d8-43c4-99e9-15d178d1501e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '84e45a21-39d8-43c4-99e9-15d178d1501e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"11e56923-a226-47f3-8bb1-7a6dd5c6fdbd":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"e42b07e3-f7b3-4def-b207-5e2f767589ae","type":"Line"},{"attributes":{},"id":"631faec6-143a-43c3-ac39-2a7c3b30e51c","type":"BasicTicker"},{"attributes":{},"id":"d6269b21-5be2-4138-9307-d811251d691c","type":"BasicTickFormatter"},{"attributes":{},"id":"e694f974-ca85-4aa3-9a29-87f9011f9eff","type":"BasicTicker"},{"attributes":{},"id":"dbc97113-22e6-4b10-820b-e543b063809a","type":"HelpTool"},{"attributes":{},"id":"27cea46c-89e8-46ba-a76b-00e1a01525a0","type":"LinearScale"},{"attributes":{"formatter":{"id":"d6269b21-5be2-4138-9307-d811251d691c","type":"BasicTickFormatter"},"plot":{"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},"ticker":{"id":"631faec6-143a-43c3-ac39-2a7c3b30e51c","type":"BasicTicker"}},"id":"b36c02e8-c40c-4906-a3b2-b0d9f2ab4392","type":"LinearAxis"},{"attributes":{"child":{"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"7392d040-3d2e-4939-834d-96ea4ea444ab","type":"Panel"},{"attributes":{"plot":null,"text":""},"id":"ee7c2f6b-7f37-4e9a-9eff-f00de4af0496","type":"Title"},{"attributes":{"below":[{"id":"9d8b2db7-8b6c-40c5-841b-050a4eb57cce","type":"LinearAxis"}],"left":[{"id":"3c47a03d-61d2-4075-9061-cca47ba7b431","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9d8b2db7-8b6c-40c5-841b-050a4eb57cce","type":"LinearAxis"},{"id":"6ccb4c53-3029-4ffd-ade5-dcadfa02930b","type":"Grid"},{"id":"3c47a03d-61d2-4075-9061-cca47ba7b431","type":"LinearAxis"},{"id":"36b6bbbc-6e2a-4590-bd25-4c3ee2fd37c1","type":"Grid"},{"id":"fe647277-b5f4-4693-a5d8-5b720ddda60e","type":"BoxAnnotation"},{"id":"f071610b-821e-4046-b3a5-60d88c849ac9","type":"GlyphRenderer"}],"title":{"id":"d15d39b9-8dc9-45a9-9c65-578e1b6ba40a","type":"Title"},"toolbar":{"id":"76f8c808-adad-4077-b6d6-fbe9163c6a46","type":"Toolbar"},"x_range":{"id":"d93c27d7-6ad0-4259-8091-3827fe2f07d1","type":"DataRange1d"},"x_scale":{"id":"1d700e08-8c31-44e5-9df3-c8eee3165662","type":"LinearScale"},"y_range":{"id":"570decef-13fe-46d6-8ec9-a72d6f04b95b","type":"DataRange1d"},"y_scale":{"id":"7926fa28-997f-46d2-9553-d82aeb547e18","type":"LinearScale"}},"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"75eb5f1f-31a7-438b-9138-d15e51cb9282","type":"SaveTool"},{"attributes":{"below":[{"id":"07353f5a-f932-435c-94fa-86419f19aa76","type":"LinearAxis"}],"left":[{"id":"b36c02e8-c40c-4906-a3b2-b0d9f2ab4392","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"07353f5a-f932-435c-94fa-86419f19aa76","type":"LinearAxis"},{"id":"e302d186-d7b2-4dbc-870a-c9c89f3e620b","type":"Grid"},{"id":"b36c02e8-c40c-4906-a3b2-b0d9f2ab4392","type":"LinearAxis"},{"id":"e6ea3efc-aa92-41fa-8d2a-2a4ce3477a2a","type":"Grid"},{"id":"c473a320-718b-48aa-8ad0-19040161df16","type":"BoxAnnotation"},{"id":"ab4a6a4a-ca5a-493f-a027-0d62a283395a","type":"GlyphRenderer"}],"title":{"id":"ee7c2f6b-7f37-4e9a-9eff-f00de4af0496","type":"Title"},"toolbar":{"id":"fba1fbc9-243b-42e7-ab22-1ced682ec1ca","type":"Toolbar"},"x_range":{"id":"7ea4afdf-934b-4a40-bbf9-dcb8546be2e2","type":"DataRange1d"},"x_scale":{"id":"9c346660-dbc2-446d-8a6a-64a1f7da2ff0","type":"LinearScale"},"y_range":{"id":"66fd091b-9f18-4b09-933e-b4e35a676d7f","type":"DataRange1d"},"y_scale":{"id":"27cea46c-89e8-46ba-a76b-00e1a01525a0","type":"LinearScale"}},"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"fe647277-b5f4-4693-a5d8-5b720ddda60e","type":"BoxAnnotation"}},"id":"b5f8f0e2-8814-470c-baef-197679097248","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe647277-b5f4-4693-a5d8-5b720ddda60e","type":"BoxAnnotation"},{"attributes":{},"id":"6ccfcbb3-ae64-4cfe-8aa5-d378abba1c52","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"570decef-13fe-46d6-8ec9-a72d6f04b95b","type":"DataRange1d"},{"attributes":{},"id":"a0b6d722-d947-471a-a66b-3dc5467f30b6","type":"WheelZoomTool"},{"attributes":{},"id":"7926fa28-997f-46d2-9553-d82aeb547e18","type":"LinearScale"},{"attributes":{"data_source":{"id":"6d123a3d-c2d2-48ad-beb1-8b7f10fe3910","type":"ColumnDataSource"},"glyph":{"id":"37fcd4d7-0538-4b4d-8811-46c0349fbb55","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af2f1c05-18d5-4a57-bd8e-28077a66df2e","type":"Circle"},"selection_glyph":null,"view":{"id":"98d9a36e-2fcc-4c0b-89da-fc0a2797a982","type":"CDSView"}},"id":"f071610b-821e-4046-b3a5-60d88c849ac9","type":"GlyphRenderer"},{"attributes":{},"id":"e2dbf2e9-5593-41ed-b44f-b0e3118d8eb6","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"37fcd4d7-0538-4b4d-8811-46c0349fbb55","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},"ticker":{"id":"631faec6-143a-43c3-ac39-2a7c3b30e51c","type":"BasicTicker"}},"id":"e6ea3efc-aa92-41fa-8d2a-2a4ce3477a2a","type":"Grid"},{"attributes":{},"id":"939276d0-5ee4-4b06-9767-0f0cbd47848e","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"4fd44170-11f1-405e-afbc-5e451bfe22db","type":"Selection"},"selection_policy":{"id":"939276d0-5ee4-4b06-9767-0f0cbd47848e","type":"UnionRenderers"}},"id":"f262f3fe-29ce-4c59-b358-df767ba58d2f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d93c27d7-6ad0-4259-8091-3827fe2f07d1","type":"DataRange1d"},{"attributes":{},"id":"def9c186-3c57-4832-a388-6676fb263374","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"af2f1c05-18d5-4a57-bd8e-28077a66df2e","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a169d2db-baf4-45e4-871a-7c07b51ca606","type":"PanTool"},{"id":"a0b6d722-d947-471a-a66b-3dc5467f30b6","type":"WheelZoomTool"},{"id":"b5f8f0e2-8814-470c-baef-197679097248","type":"BoxZoomTool"},{"id":"75eb5f1f-31a7-438b-9138-d15e51cb9282","type":"SaveTool"},{"id":"999c045e-2874-48a1-9d69-42a747a596b6","type":"ResetTool"},{"id":"dbc97113-22e6-4b10-820b-e543b063809a","type":"HelpTool"}]},"id":"76f8c808-adad-4077-b6d6-fbe9163c6a46","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"2b6864e2-8593-49f1-a953-a9ce18d988fe","type":"Line"},{"attributes":{},"id":"a169d2db-baf4-45e4-871a-7c07b51ca606","type":"PanTool"},{"attributes":{"data_source":{"id":"f262f3fe-29ce-4c59-b358-df767ba58d2f","type":"ColumnDataSource"},"glyph":{"id":"2b6864e2-8593-49f1-a953-a9ce18d988fe","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e42b07e3-f7b3-4def-b207-5e2f767589ae","type":"Line"},"selection_glyph":null,"view":{"id":"604f5f27-06b4-4669-b143-d2f65987d203","type":"CDSView"}},"id":"ab4a6a4a-ca5a-493f-a027-0d62a283395a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"121d4b99-530e-4944-8dcb-c6b723384b04","type":"BasicTicker"}},"id":"6ccb4c53-3029-4ffd-ade5-dcadfa02930b","type":"Grid"},{"attributes":{"callback":null},"id":"66fd091b-9f18-4b09-933e-b4e35a676d7f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"def9c186-3c57-4832-a388-6676fb263374","type":"BasicTickFormatter"},"plot":{"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffaa79e2-3782-4873-9400-c225d23c102a","type":"BasicTicker"}},"id":"07353f5a-f932-435c-94fa-86419f19aa76","type":"LinearAxis"},{"attributes":{"source":{"id":"6d123a3d-c2d2-48ad-beb1-8b7f10fe3910","type":"ColumnDataSource"}},"id":"98d9a36e-2fcc-4c0b-89da-fc0a2797a982","type":"CDSView"},{"attributes":{"formatter":{"id":"59bb8450-d377-4bd5-8c6a-e14b33a3252e","type":"BasicTickFormatter"},"plot":{"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"121d4b99-530e-4944-8dcb-c6b723384b04","type":"BasicTicker"}},"id":"9d8b2db7-8b6c-40c5-841b-050a4eb57cce","type":"LinearAxis"},{"attributes":{},"id":"4fd44170-11f1-405e-afbc-5e451bfe22db","type":"Selection"},{"attributes":{},"id":"ffaa79e2-3782-4873-9400-c225d23c102a","type":"BasicTicker"},{"attributes":{},"id":"1d700e08-8c31-44e5-9df3-c8eee3165662","type":"LinearScale"},{"attributes":{"formatter":{"id":"6ccfcbb3-ae64-4cfe-8aa5-d378abba1c52","type":"BasicTickFormatter"},"plot":{"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"e694f974-ca85-4aa3-9a29-87f9011f9eff","type":"BasicTicker"}},"id":"3c47a03d-61d2-4075-9061-cca47ba7b431","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7ea4afdf-934b-4a40-bbf9-dcb8546be2e2","type":"DataRange1d"},{"attributes":{},"id":"95ad2f2c-7f36-4192-b27e-ba2dc4e2adb3","type":"UnionRenderers"},{"attributes":{"plot":{"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},"ticker":{"id":"ffaa79e2-3782-4873-9400-c225d23c102a","type":"BasicTicker"}},"id":"e302d186-d7b2-4dbc-870a-c9c89f3e620b","type":"Grid"},{"attributes":{},"id":"9c346660-dbc2-446d-8a6a-64a1f7da2ff0","type":"LinearScale"},{"attributes":{},"id":"121d4b99-530e-4944-8dcb-c6b723384b04","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"e2dbf2e9-5593-41ed-b44f-b0e3118d8eb6","type":"Selection"},"selection_policy":{"id":"95ad2f2c-7f36-4192-b27e-ba2dc4e2adb3","type":"UnionRenderers"}},"id":"6d123a3d-c2d2-48ad-beb1-8b7f10fe3910","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"3df9491b-c296-4e9f-b620-10b992423d44","subtype":"Figure","type":"Plot"},"ticker":{"id":"e694f974-ca85-4aa3-9a29-87f9011f9eff","type":"BasicTicker"}},"id":"36b6bbbc-6e2a-4590-bd25-4c3ee2fd37c1","type":"Grid"},{"attributes":{"child":{"id":"68d182f9-a123-47ef-a675-7eac7557f672","subtype":"Figure","type":"Plot"},"title":"line"},"id":"4b4e2311-fdbe-4be9-a8cc-77c93f02cbf9","type":"Panel"},{"attributes":{"source":{"id":"f262f3fe-29ce-4c59-b358-df767ba58d2f","type":"ColumnDataSource"}},"id":"604f5f27-06b4-4669-b143-d2f65987d203","type":"CDSView"},{"attributes":{},"id":"138dd350-ba5c-47d2-806c-3d5fd0797361","type":"SaveTool"},{"attributes":{},"id":"9051ee45-2133-4243-a8ee-68fda0af4e04","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"7392d040-3d2e-4939-834d-96ea4ea444ab","type":"Panel"},{"id":"4b4e2311-fdbe-4be9-a8cc-77c93f02cbf9","type":"Panel"}]},"id":"4edc34b1-1170-4f9e-af6b-47fd93d15264","type":"Tabs"},{"attributes":{},"id":"59bb8450-d377-4bd5-8c6a-e14b33a3252e","type":"BasicTickFormatter"},{"attributes":{},"id":"a84894c5-1fb4-4583-a12a-3248136c25d3","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"d15d39b9-8dc9-45a9-9c65-578e1b6ba40a","type":"Title"},{"attributes":{},"id":"e60821f7-b52d-423a-b0b7-d02cf0bb9da5","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"632f3fe9-68bc-4369-9558-31869094831a","type":"PanTool"},{"id":"9051ee45-2133-4243-a8ee-68fda0af4e04","type":"WheelZoomTool"},{"id":"c5629821-e070-456d-a739-adfc7ce37456","type":"BoxZoomTool"},{"id":"138dd350-ba5c-47d2-806c-3d5fd0797361","type":"SaveTool"},{"id":"e60821f7-b52d-423a-b0b7-d02cf0bb9da5","type":"ResetTool"},{"id":"a84894c5-1fb4-4583-a12a-3248136c25d3","type":"HelpTool"}]},"id":"fba1fbc9-243b-42e7-ab22-1ced682ec1ca","type":"Toolbar"},{"attributes":{"overlay":{"id":"c473a320-718b-48aa-8ad0-19040161df16","type":"BoxAnnotation"}},"id":"c5629821-e070-456d-a739-adfc7ce37456","type":"BoxZoomTool"},{"attributes":{},"id":"999c045e-2874-48a1-9d69-42a747a596b6","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c473a320-718b-48aa-8ad0-19040161df16","type":"BoxAnnotation"},{"attributes":{},"id":"632f3fe9-68bc-4369-9558-31869094831a","type":"PanTool"}],"root_ids":["4edc34b1-1170-4f9e-af6b-47fd93d15264"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"11e56923-a226-47f3-8bb1-7a6dd5c6fdbd","roots":{"4edc34b1-1170-4f9e-af6b-47fd93d15264":"84e45a21-39d8-43c4-99e9-15d178d1501e"}}];
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