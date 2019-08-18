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
      };var element = document.getElementById("22348b45-8569-4553-a390-79bb1c42e9d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22348b45-8569-4553-a390-79bb1c42e9d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa5a81a3-b35f-4361-9097-befa74e850c7":{"roots":{"references":[{"attributes":{},"id":"4d5d87a1-a294-4a8a-8696-ab0ce64d006e","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"1946d443-66b9-4707-8d4e-e701f04a5db8","type":"BasicTickFormatter"},"plot":{"id":"f4712bc8-b51d-40a4-a3da-1cd01089e065","subtype":"Figure","type":"Plot"},"ticker":{"id":"92bb40d6-c22f-4495-bd41-e2f009e82d16","type":"BasicTicker"}},"id":"f432d49e-9f2c-4163-a15c-183709bc24c2","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"fd532997-2067-4168-88d1-4162628100d5","type":"DataRange1d"},{"attributes":{},"id":"1946d443-66b9-4707-8d4e-e701f04a5db8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5590ce22-ea90-48d5-90b9-483be8448e9a","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"750d0ce7-ecbe-423b-a632-351e58712f7e","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"c39d04ce-2677-47e9-a02e-2054c730fcb8","type":"FactorRange"},{"attributes":{"data_source":{"id":"a89c3fba-4fb8-4b01-8d7b-598382b83d7a","type":"ColumnDataSource"},"glyph":{"id":"6bda33e1-78b3-4fef-aaf4-c5f5ac802a6b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"750d0ce7-ecbe-423b-a632-351e58712f7e","type":"VBar"},"selection_glyph":null,"view":{"id":"b34c9b95-e6bf-4e03-8bec-f8f6c2a5e328","type":"CDSView"}},"id":"1580ff58-a35c-4aee-ba82-1da41bedc9f4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a89c3fba-4fb8-4b01-8d7b-598382b83d7a","type":"ColumnDataSource"}},"id":"b34c9b95-e6bf-4e03-8bec-f8f6c2a5e328","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":null,"selection_policy":null},"id":"a89c3fba-4fb8-4b01-8d7b-598382b83d7a","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"f4712bc8-b51d-40a4-a3da-1cd01089e065","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d5d87a1-a294-4a8a-8696-ab0ce64d006e","type":"CategoricalTicker"}},"id":"928a9376-7f50-41c6-acc6-76d558bfd497","type":"Grid"},{"attributes":{},"id":"b399d984-cdf9-4d38-91f3-40b0ec85ea22","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f4712bc8-b51d-40a4-a3da-1cd01089e065","subtype":"Figure","type":"Plot"},"ticker":{"id":"92bb40d6-c22f-4495-bd41-e2f009e82d16","type":"BasicTicker"}},"id":"a2b0c305-c069-41d5-b4c8-17ec8d0e72b7","type":"Grid"},{"attributes":{},"id":"92bb40d6-c22f-4495-bd41-e2f009e82d16","type":"BasicTicker"},{"attributes":{},"id":"324228d5-e74f-41d2-9a1b-bde968e4ab2e","type":"LinearScale"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"73412a9b-5ac0-47ae-af8f-0402a2fa5d14","type":"Title"},{"attributes":{},"id":"3891ac7e-9014-43fe-834e-6df01e0bcf18","type":"CategoricalScale"},{"attributes":{"below":[{"id":"598559f6-619f-4962-9a63-7f9f5da16f1b","type":"CategoricalAxis"}],"left":[{"id":"f432d49e-9f2c-4163-a15c-183709bc24c2","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"598559f6-619f-4962-9a63-7f9f5da16f1b","type":"CategoricalAxis"},{"id":"928a9376-7f50-41c6-acc6-76d558bfd497","type":"Grid"},{"id":"f432d49e-9f2c-4163-a15c-183709bc24c2","type":"LinearAxis"},{"id":"a2b0c305-c069-41d5-b4c8-17ec8d0e72b7","type":"Grid"},{"id":"1580ff58-a35c-4aee-ba82-1da41bedc9f4","type":"GlyphRenderer"}],"title":{"id":"73412a9b-5ac0-47ae-af8f-0402a2fa5d14","type":"Title"},"toolbar":{"id":"5590ce22-ea90-48d5-90b9-483be8448e9a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c39d04ce-2677-47e9-a02e-2054c730fcb8","type":"FactorRange"},"x_scale":{"id":"3891ac7e-9014-43fe-834e-6df01e0bcf18","type":"CategoricalScale"},"y_range":{"id":"fd532997-2067-4168-88d1-4162628100d5","type":"DataRange1d"},"y_scale":{"id":"324228d5-e74f-41d2-9a1b-bde968e4ab2e","type":"LinearScale"}},"id":"f4712bc8-b51d-40a4-a3da-1cd01089e065","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"6bda33e1-78b3-4fef-aaf4-c5f5ac802a6b","type":"VBar"},{"attributes":{"formatter":{"id":"b399d984-cdf9-4d38-91f3-40b0ec85ea22","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"f4712bc8-b51d-40a4-a3da-1cd01089e065","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d5d87a1-a294-4a8a-8696-ab0ce64d006e","type":"CategoricalTicker"}},"id":"598559f6-619f-4962-9a63-7f9f5da16f1b","type":"CategoricalAxis"}],"root_ids":["f4712bc8-b51d-40a4-a3da-1cd01089e065"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"fa5a81a3-b35f-4361-9097-befa74e850c7","elementid":"22348b45-8569-4553-a390-79bb1c42e9d7","modelid":"f4712bc8-b51d-40a4-a3da-1cd01089e065"}];
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