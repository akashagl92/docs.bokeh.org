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
      };var element = document.getElementById("198f6e16-e87d-4e2c-810a-39d4818f4388");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '198f6e16-e87d-4e2c-810a-39d4818f4388' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a8fb51f2-cbbe-4583-a67f-f4e248d22839":{"roots":{"references":[{"attributes":{"below":[{"id":"b5b9fe61-9f78-4f0e-9ad0-be7862a92a91","type":"CategoricalAxis"}],"left":[{"id":"42910abd-6630-4136-a77d-7f69207d9c58","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"b5b9fe61-9f78-4f0e-9ad0-be7862a92a91","type":"CategoricalAxis"},{"id":"f670d206-a755-4dba-b622-f2eb026e0c22","type":"Grid"},{"id":"42910abd-6630-4136-a77d-7f69207d9c58","type":"LinearAxis"},{"id":"922416ee-ce7c-4f99-b518-0b358086939d","type":"Grid"},{"id":"d4ae6981-2ff1-4814-ae82-65c1a3c0bf4a","type":"Legend"},{"id":"e74ded59-20ea-40e3-be5e-98c8881d666d","type":"GlyphRenderer"},{"id":"65c14cb8-14bf-4848-9505-425ffa975e6f","type":"GlyphRenderer"},{"id":"051fbb61-56b6-48e5-8fbb-7ad271df9d89","type":"GlyphRenderer"}],"title":{"id":"d9069b53-b2ef-46c4-8b47-db1606b294cf","type":"Title"},"toolbar":{"id":"ff0f45c5-da84-4fcb-b0ce-d92f7e6e8da9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b9343af8-86e4-47fc-87a6-673985c92b12","type":"FactorRange"},"x_scale":{"id":"6d360b36-61c7-4702-873e-b6dfebd3ca08","type":"CategoricalScale"},"y_range":{"id":"4fe96297-0179-4a36-8a82-a3cda649730b","type":"Range1d"},"y_scale":{"id":"6ea66066-98a7-4c3c-b9fd-dd1fecb62a34","type":"LinearScale"}},"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a787673-f793-4a33-86ee-6b270b6ebb11","type":"BasicTicker"}},"id":"922416ee-ce7c-4f99-b518-0b358086939d","type":"Grid"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"55ea16bd-e182-4a4b-b345-d8ec191ff81f","type":"Selection"},"selection_policy":{"id":"9db22d21-6b30-4458-8b75-27f17d476e59","type":"UnionRenderers"}},"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"},{"attributes":{},"id":"55ea16bd-e182-4a4b-b345-d8ec191ff81f","type":"Selection"},{"attributes":{},"id":"2a787673-f793-4a33-86ee-6b270b6ebb11","type":"BasicTicker"},{"attributes":{},"id":"6fc78626-3296-4eb7-b594-7e14d4512892","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"}},"id":"9a103af0-dd25-472f-b189-d217c983b882","type":"CDSView"},{"attributes":{"formatter":{"id":"6a4acaaa-f4c3-48aa-bd13-4cd45fb00d61","type":"CategoricalTickFormatter"},"plot":{"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c29f52e-6fa4-4c25-8849-28b7c0feb0e7","type":"CategoricalTicker"}},"id":"b5b9fe61-9f78-4f0e-9ad0-be7862a92a91","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"373deb94-92c3-47f1-a71c-e67971d5530d","type":"Dodge"}}},"id":"b64a44b9-6843-4564-87be-b35d2c0ad7b2","type":"VBar"},{"attributes":{"callback":null,"end":10},"id":"4fe96297-0179-4a36-8a82-a3cda649730b","type":"Range1d"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d29924d7-d708-4a54-8767-c645bedd8ff7","type":"Dodge"}}},"id":"d1d89551-83bd-490d-845b-617b31a16335","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b9343af8-86e4-47fc-87a6-673985c92b12","type":"FactorRange"},{"attributes":{"source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"}},"id":"238e8422-730d-4925-99c4-6f99cec1d445","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"ff0f45c5-da84-4fcb-b0ce-d92f7e6e8da9","type":"Toolbar"},{"attributes":{"data_source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"},"glyph":{"id":"c9d78146-0ef7-4e09-9b7e-3c311cf55560","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b64a44b9-6843-4564-87be-b35d2c0ad7b2","type":"VBar"},"selection_glyph":null,"view":{"id":"4ac7e23d-33ab-4d95-8037-c6deb7dc853e","type":"CDSView"}},"id":"051fbb61-56b6-48e5-8fbb-7ad271df9d89","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d29924d7-d708-4a54-8767-c645bedd8ff7","type":"Dodge"}}},"id":"bcae789b-1470-41c1-ae43-e5607a17ccff","type":"VBar"},{"attributes":{"data_source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"},"glyph":{"id":"d1d89551-83bd-490d-845b-617b31a16335","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bcae789b-1470-41c1-ae43-e5607a17ccff","type":"VBar"},"selection_glyph":null,"view":{"id":"9a103af0-dd25-472f-b189-d217c983b882","type":"CDSView"}},"id":"e74ded59-20ea-40e3-be5e-98c8881d666d","type":"GlyphRenderer"},{"attributes":{},"id":"7c29f52e-6fa4-4c25-8849-28b7c0feb0e7","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"897e34ce-e050-4b08-9fcf-4637d7813295","type":"Dodge"}}},"id":"092e16fb-0edd-4063-972f-1a28a248e68b","type":"VBar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"373deb94-92c3-47f1-a71c-e67971d5530d","type":"Dodge"}}},"id":"c9d78146-0ef7-4e09-9b7e-3c311cf55560","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c29f52e-6fa4-4c25-8849-28b7c0feb0e7","type":"CategoricalTicker"}},"id":"f670d206-a755-4dba-b622-f2eb026e0c22","type":"Grid"},{"attributes":{"range":{"id":"b9343af8-86e4-47fc-87a6-673985c92b12","type":"FactorRange"}},"id":"897e34ce-e050-4b08-9fcf-4637d7813295","type":"Dodge"},{"attributes":{},"id":"9db22d21-6b30-4458-8b75-27f17d476e59","type":"UnionRenderers"},{"attributes":{"range":{"id":"b9343af8-86e4-47fc-87a6-673985c92b12","type":"FactorRange"},"value":0.25},"id":"373deb94-92c3-47f1-a71c-e67971d5530d","type":"Dodge"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"897e34ce-e050-4b08-9fcf-4637d7813295","type":"Dodge"}}},"id":"c3434853-4842-4c4a-ad24-45a6387efb14","type":"VBar"},{"attributes":{"range":{"id":"b9343af8-86e4-47fc-87a6-673985c92b12","type":"FactorRange"},"value":-0.25},"id":"d29924d7-d708-4a54-8767-c645bedd8ff7","type":"Dodge"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"e74ded59-20ea-40e3-be5e-98c8881d666d","type":"GlyphRenderer"}]},"id":"4ee858f0-b3b8-4e1a-a20e-5efe06f6995b","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"d9069b53-b2ef-46c4-8b47-db1606b294cf","type":"Title"},{"attributes":{},"id":"6a4acaaa-f4c3-48aa-bd13-4cd45fb00d61","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"},"glyph":{"id":"c3434853-4842-4c4a-ad24-45a6387efb14","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"092e16fb-0edd-4063-972f-1a28a248e68b","type":"VBar"},"selection_glyph":null,"view":{"id":"238e8422-730d-4925-99c4-6f99cec1d445","type":"CDSView"}},"id":"65c14cb8-14bf-4848-9505-425ffa975e6f","type":"GlyphRenderer"},{"attributes":{"source":{"id":"6e3c704d-c772-44c2-b340-75d16b6f9a0b","type":"ColumnDataSource"}},"id":"4ac7e23d-33ab-4d95-8037-c6deb7dc853e","type":"CDSView"},{"attributes":{},"id":"6d360b36-61c7-4702-873e-b6dfebd3ca08","type":"CategoricalScale"},{"attributes":{"items":[{"id":"4ee858f0-b3b8-4e1a-a20e-5efe06f6995b","type":"LegendItem"},{"id":"0b2a9a8a-e42c-4b5f-97d9-1dfed6bce23e","type":"LegendItem"},{"id":"17cf2326-a9a0-4907-8913-88e760695389","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"}},"id":"d4ae6981-2ff1-4814-ae82-65c1a3c0bf4a","type":"Legend"},{"attributes":{},"id":"6ea66066-98a7-4c3c-b9fd-dd1fecb62a34","type":"LinearScale"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"051fbb61-56b6-48e5-8fbb-7ad271df9d89","type":"GlyphRenderer"}]},"id":"17cf2326-a9a0-4907-8913-88e760695389","type":"LegendItem"},{"attributes":{"formatter":{"id":"6fc78626-3296-4eb7-b594-7e14d4512892","type":"BasicTickFormatter"},"plot":{"id":"a59e78e7-e607-4eb4-b3ab-22426f60e6f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a787673-f793-4a33-86ee-6b270b6ebb11","type":"BasicTicker"}},"id":"42910abd-6630-4136-a77d-7f69207d9c58","type":"LinearAxis"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"65c14cb8-14bf-4848-9505-425ffa975e6f","type":"GlyphRenderer"}]},"id":"0b2a9a8a-e42c-4b5f-97d9-1dfed6bce23e","type":"LegendItem"}],"root_ids":["a59e78e7-e607-4eb4-b3ab-22426f60e6f5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a8fb51f2-cbbe-4583-a67f-f4e248d22839","roots":{"a59e78e7-e607-4eb4-b3ab-22426f60e6f5":"198f6e16-e87d-4e2c-810a-39d4818f4388"}}];
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