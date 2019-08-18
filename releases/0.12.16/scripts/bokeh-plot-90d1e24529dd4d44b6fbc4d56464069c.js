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
      };var element = document.getElementById("5392623b-bbcf-4e40-a0b5-540231c0c84d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5392623b-bbcf-4e40-a0b5-540231c0c84d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eee06401-018f-456f-a196-9fa6e713da89":{"roots":{"references":[{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"00e036ea-ace7-47d7-86be-bf23ddd6b765","type":"Selection"},"selection_policy":{"id":"9f5fb273-0912-486c-93f5-c450aa295875","type":"UnionRenderers"}},"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"36c7fbe3-c3e9-4c6a-9779-f1e4a8095ba7","type":"FactorRange"},{"attributes":{},"id":"00e036ea-ace7-47d7-86be-bf23ddd6b765","type":"Selection"},{"attributes":{},"id":"07382dd8-4bf6-4a7c-93a9-ca0d0b9603ba","type":"BasicTickFormatter"},{"attributes":{"range":{"id":"36c7fbe3-c3e9-4c6a-9779-f1e4a8095ba7","type":"FactorRange"}},"id":"d16067a5-a20e-4127-9488-fb3ce1fd430a","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"2c66fb01-fa49-4445-892b-b07e20b84235","type":"Dodge"}}},"id":"af55a414-2447-4778-8ad8-816df7314773","type":"VBar"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"7dd72bca-22b2-41c3-bef4-ce013a4c418f","type":"GlyphRenderer"}]},"id":"d67c2034-982f-4749-b288-092c68a82661","type":"LegendItem"},{"attributes":{},"id":"3cbc60f5-ad20-4926-8737-1106479d7f86","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d16067a5-a20e-4127-9488-fb3ce1fd430a","type":"Dodge"}}},"id":"4cb3490e-ae6e-47c2-ba4f-db7dc0b70f38","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d16067a5-a20e-4127-9488-fb3ce1fd430a","type":"Dodge"}}},"id":"d9f71d04-5462-4010-9e92-9d3367a56bec","type":"VBar"},{"attributes":{"formatter":{"id":"07382dd8-4bf6-4a7c-93a9-ca0d0b9603ba","type":"BasicTickFormatter"},"plot":{"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"},"ticker":{"id":"31fd7997-dd60-4365-83af-b6375c37f260","type":"BasicTicker"}},"id":"217d1def-21a8-4205-a52b-c1d64916d838","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b2c1fb85-21d3-4029-9696-123fe737e1ca","type":"Toolbar"},{"attributes":{"data_source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"},"glyph":{"id":"4cb3490e-ae6e-47c2-ba4f-db7dc0b70f38","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9f71d04-5462-4010-9e92-9d3367a56bec","type":"VBar"},"selection_glyph":null,"view":{"id":"6306bf3f-34e1-4077-b79b-bbd9673260ff","type":"CDSView"}},"id":"7dd72bca-22b2-41c3-bef4-ce013a4c418f","type":"GlyphRenderer"},{"attributes":{},"id":"63858069-ce7e-493f-8892-3addb07f0aff","type":"CategoricalTicker"},{"attributes":{"source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"}},"id":"6306bf3f-34e1-4077-b79b-bbd9673260ff","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"218c6ea1-4d88-4b86-9041-45499c18f437","type":"Range1d"},{"attributes":{},"id":"9f5fb273-0912-486c-93f5-c450aa295875","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"2bea1f33-14c6-425b-bd5b-863dfff0dac3","type":"Dodge"}}},"id":"a8d7584d-1abc-41bb-95e2-03341af08d40","type":"VBar"},{"attributes":{},"id":"ec932aec-8d6e-4f2f-9554-703044533e91","type":"LinearScale"},{"attributes":{"range":{"id":"36c7fbe3-c3e9-4c6a-9779-f1e4a8095ba7","type":"FactorRange"},"value":0.25},"id":"2bea1f33-14c6-425b-bd5b-863dfff0dac3","type":"Dodge"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"e72e0974-5f77-44c6-8a1e-2360aadf7b67","type":"Title"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"2bea1f33-14c6-425b-bd5b-863dfff0dac3","type":"Dodge"}}},"id":"da557880-2fad-4cbb-8835-d99631760604","type":"VBar"},{"attributes":{"range":{"id":"36c7fbe3-c3e9-4c6a-9779-f1e4a8095ba7","type":"FactorRange"},"value":-0.25},"id":"2c66fb01-fa49-4445-892b-b07e20b84235","type":"Dodge"},{"attributes":{"data_source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"},"glyph":{"id":"da557880-2fad-4cbb-8835-d99631760604","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8d7584d-1abc-41bb-95e2-03341af08d40","type":"VBar"},"selection_glyph":null,"view":{"id":"b095bb02-b875-4824-83d6-969bd0ccd47c","type":"CDSView"}},"id":"2f7186a2-0de4-4c35-8e93-b89a148b4b6a","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"2c66fb01-fa49-4445-892b-b07e20b84235","type":"Dodge"}}},"id":"a608162e-3188-4c7c-aa4d-c9a49cf748d7","type":"VBar"},{"attributes":{"source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"}},"id":"b095bb02-b875-4824-83d6-969bd0ccd47c","type":"CDSView"},{"attributes":{"formatter":{"id":"4ca83aec-87b9-4ce0-9180-645987c04f34","type":"CategoricalTickFormatter"},"plot":{"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"},"ticker":{"id":"63858069-ce7e-493f-8892-3addb07f0aff","type":"CategoricalTicker"}},"id":"67649784-e3ea-4b0c-9963-df87cc29505a","type":"CategoricalAxis"},{"attributes":{},"id":"31fd7997-dd60-4365-83af-b6375c37f260","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"},"ticker":{"id":"31fd7997-dd60-4365-83af-b6375c37f260","type":"BasicTicker"}},"id":"c00a821a-1584-4e4f-8dea-b40560dc6dfe","type":"Grid"},{"attributes":{"below":[{"id":"67649784-e3ea-4b0c-9963-df87cc29505a","type":"CategoricalAxis"}],"left":[{"id":"217d1def-21a8-4205-a52b-c1d64916d838","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"67649784-e3ea-4b0c-9963-df87cc29505a","type":"CategoricalAxis"},{"id":"9b9dd8db-d1b9-4823-9ad0-dbe216b3fa8f","type":"Grid"},{"id":"217d1def-21a8-4205-a52b-c1d64916d838","type":"LinearAxis"},{"id":"c00a821a-1584-4e4f-8dea-b40560dc6dfe","type":"Grid"},{"id":"2cde9214-69aa-4bbf-8436-b56d298bd09b","type":"Legend"},{"id":"f68c075d-36dd-4497-b00d-3e0c07db5c6a","type":"GlyphRenderer"},{"id":"7dd72bca-22b2-41c3-bef4-ce013a4c418f","type":"GlyphRenderer"},{"id":"2f7186a2-0de4-4c35-8e93-b89a148b4b6a","type":"GlyphRenderer"}],"title":{"id":"e72e0974-5f77-44c6-8a1e-2360aadf7b67","type":"Title"},"toolbar":{"id":"b2c1fb85-21d3-4029-9696-123fe737e1ca","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"36c7fbe3-c3e9-4c6a-9779-f1e4a8095ba7","type":"FactorRange"},"x_scale":{"id":"3cbc60f5-ad20-4926-8737-1106479d7f86","type":"CategoricalScale"},"y_range":{"id":"218c6ea1-4d88-4b86-9041-45499c18f437","type":"Range1d"},"y_scale":{"id":"ec932aec-8d6e-4f2f-9554-703044533e91","type":"LinearScale"}},"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"},"ticker":{"id":"63858069-ce7e-493f-8892-3addb07f0aff","type":"CategoricalTicker"}},"id":"9b9dd8db-d1b9-4823-9ad0-dbe216b3fa8f","type":"Grid"},{"attributes":{"data_source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"},"glyph":{"id":"a608162e-3188-4c7c-aa4d-c9a49cf748d7","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"af55a414-2447-4778-8ad8-816df7314773","type":"VBar"},"selection_glyph":null,"view":{"id":"db287423-7e8a-41f9-8167-2d7beb8bbb2e","type":"CDSView"}},"id":"f68c075d-36dd-4497-b00d-3e0c07db5c6a","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"2f7186a2-0de4-4c35-8e93-b89a148b4b6a","type":"GlyphRenderer"}]},"id":"1cf0b6f5-f775-4d66-a652-7f10345e6d06","type":"LegendItem"},{"attributes":{"source":{"id":"f8df73c9-5ee4-4fc6-84c3-040754aa7a6f","type":"ColumnDataSource"}},"id":"db287423-7e8a-41f9-8167-2d7beb8bbb2e","type":"CDSView"},{"attributes":{"items":[{"id":"25e09d95-6f0b-40e0-a2ea-6f26ec9ca390","type":"LegendItem"},{"id":"d67c2034-982f-4749-b288-092c68a82661","type":"LegendItem"},{"id":"1cf0b6f5-f775-4d66-a652-7f10345e6d06","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"37c54a13-68cd-4c68-8aa0-ee7f09da6104","subtype":"Figure","type":"Plot"}},"id":"2cde9214-69aa-4bbf-8436-b56d298bd09b","type":"Legend"},{"attributes":{},"id":"4ca83aec-87b9-4ce0-9180-645987c04f34","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"f68c075d-36dd-4497-b00d-3e0c07db5c6a","type":"GlyphRenderer"}]},"id":"25e09d95-6f0b-40e0-a2ea-6f26ec9ca390","type":"LegendItem"}],"root_ids":["37c54a13-68cd-4c68-8aa0-ee7f09da6104"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"eee06401-018f-456f-a196-9fa6e713da89","elementid":"5392623b-bbcf-4e40-a0b5-540231c0c84d","modelid":"37c54a13-68cd-4c68-8aa0-ee7f09da6104"}];
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