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
      };var element = document.getElementById("5d966931-064c-4ca2-a954-9ea7e8f761a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d966931-064c-4ca2-a954-9ea7e8f761a6' but no matching script tag was found. ")
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
                    var docs_json = {"4e697111-d03a-4a26-86e0-ddc4f04fcc19":{"roots":{"references":[{"attributes":{"below":[{"id":"510f37d4-2627-4bdb-9eec-b0db5517ab71","type":"CategoricalAxis"}],"left":[{"id":"a58c4c68-48cd-45b3-8390-0178882a8696","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"510f37d4-2627-4bdb-9eec-b0db5517ab71","type":"CategoricalAxis"},{"id":"c3076cac-93de-42ae-b125-345e1e713742","type":"Grid"},{"id":"a58c4c68-48cd-45b3-8390-0178882a8696","type":"LinearAxis"},{"id":"060d469f-1c32-4062-839d-bc11e9992158","type":"Grid"},{"id":"cf5b58e8-e118-4906-95e1-eec07adf7d98","type":"Legend"},{"id":"10654731-06ea-42ae-878e-132a5031d9c5","type":"GlyphRenderer"}],"title":{"id":"a78a8981-1e05-44c3-85b2-59ed12069fb4","type":"Title"},"toolbar":{"id":"a08ab1d9-bd64-45fb-b9d9-06a4aa377331","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29f2cedd-f740-46d7-9718-0272b8520242","type":"FactorRange"},"x_scale":{"id":"24e2f6b2-8d83-488c-a670-fc727ca21e1d","type":"CategoricalScale"},"y_range":{"id":"2675c194-9cfc-466b-a6f5-58b6499e6c79","type":"Range1d"},"y_scale":{"id":"e90dd256-8543-4a1f-8d32-9ad499ce4ee5","type":"LinearScale"}},"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"a78a8981-1e05-44c3-85b2-59ed12069fb4","type":"Title"},{"attributes":{"items":[{"id":"52ca655b-ab62-4aaf-b91e-a870d75cc4d7","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"}},"id":"cf5b58e8-e118-4906-95e1-eec07adf7d98","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"29f2cedd-f740-46d7-9718-0272b8520242","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a08ab1d9-bd64-45fb-b9d9-06a4aa377331","type":"Toolbar"},{"attributes":{"formatter":{"id":"914242de-fe8a-49bf-8fad-3639ec2eaec0","type":"BasicTickFormatter"},"plot":{"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"},"ticker":{"id":"06f38621-a02a-42f4-b439-4bcc6c4d1315","type":"BasicTicker"}},"id":"a58c4c68-48cd-45b3-8390-0178882a8696","type":"LinearAxis"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"10654731-06ea-42ae-878e-132a5031d9c5","type":"GlyphRenderer"}]},"id":"52ca655b-ab62-4aaf-b91e-a870d75cc4d7","type":"LegendItem"},{"attributes":{},"id":"24e2f6b2-8d83-488c-a670-fc727ca21e1d","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9},"id":"2675c194-9cfc-466b-a6f5-58b6499e6c79","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"},"ticker":{"id":"06f38621-a02a-42f4-b439-4bcc6c4d1315","type":"BasicTicker"}},"id":"060d469f-1c32-4062-839d-bc11e9992158","type":"Grid"},{"attributes":{},"id":"459e2ec0-eedb-4ede-b66f-9928f12ae84a","type":"CategoricalTickFormatter"},{"attributes":{},"id":"e90dd256-8543-4a1f-8d32-9ad499ce4ee5","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"56de12cd-9ccd-499b-bbf6-be4d975fee67","type":"VBar"},{"attributes":{"formatter":{"id":"459e2ec0-eedb-4ede-b66f-9928f12ae84a","type":"CategoricalTickFormatter"},"plot":{"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2049bb8d-b852-4875-b079-862575b50ea7","type":"CategoricalTicker"}},"id":"510f37d4-2627-4bdb-9eec-b0db5517ab71","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b6894334-0cb6-484e-b9f6-d9166e87775e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2049bb8d-b852-4875-b079-862575b50ea7","type":"CategoricalTicker"}},"id":"c3076cac-93de-42ae-b125-345e1e713742","type":"Grid"},{"attributes":{},"id":"2049bb8d-b852-4875-b079-862575b50ea7","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"99e09a7f-ec94-467e-910c-ffeb99477142","type":"VBar"},{"attributes":{},"id":"06f38621-a02a-42f4-b439-4bcc6c4d1315","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ea859243-5ed6-40b3-b6cd-39bbaeb43f7a","type":"ColumnDataSource"},"glyph":{"id":"99e09a7f-ec94-467e-910c-ffeb99477142","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56de12cd-9ccd-499b-bbf6-be4d975fee67","type":"VBar"},"selection_glyph":null,"view":{"id":"70c47d88-0a45-4fdc-afa9-1aba14320b99","type":"CDSView"}},"id":"10654731-06ea-42ae-878e-132a5031d9c5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ea859243-5ed6-40b3-b6cd-39bbaeb43f7a","type":"ColumnDataSource"}},"id":"70c47d88-0a45-4fdc-afa9-1aba14320b99","type":"CDSView"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"ea859243-5ed6-40b3-b6cd-39bbaeb43f7a","type":"ColumnDataSource"},{"attributes":{},"id":"914242de-fe8a-49bf-8fad-3639ec2eaec0","type":"BasicTickFormatter"}],"root_ids":["b6894334-0cb6-484e-b9f6-d9166e87775e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"4e697111-d03a-4a26-86e0-ddc4f04fcc19","elementid":"5d966931-064c-4ca2-a954-9ea7e8f761a6","modelid":"b6894334-0cb6-484e-b9f6-d9166e87775e"}];
                
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
