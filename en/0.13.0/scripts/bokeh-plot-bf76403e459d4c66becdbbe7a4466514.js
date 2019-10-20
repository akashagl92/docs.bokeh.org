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
      };var element = document.getElementById("8158d48d-5444-486c-9175-09178b20238b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8158d48d-5444-486c-9175-09178b20238b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3e216eaa-21b5-43a7-b943-8ed229439762":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"9be6637e-2877-4bb4-af94-2a8069c867b3","type":"Title"},{"attributes":{"formatter":{"id":"2f85f5cb-dd69-43d7-a612-f97f4cc166e2","type":"CategoricalTickFormatter"},"plot":{"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c40ca8e-dbd6-44c2-9275-9ac330aa60ee","type":"CategoricalTicker"}},"id":"6ca1b5e2-d50f-47bf-9940-869126e0d75e","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"79ac87b5-15df-4885-9ba7-3be122212800","type":"BasicTickFormatter"},"plot":{"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"02b4a6c6-451d-4de9-8e05-1426be28c074","type":"BasicTicker"}},"id":"18ab6b1d-6575-4999-a989-a88871401156","type":"LinearAxis"},{"attributes":{"range":{"id":"4e8e7b6d-d335-4bfc-8cb4-6a3eff74b285","type":"FactorRange"},"value":0.25},"id":"c9f96306-6077-478a-9657-4e6df54c3170","type":"Dodge"},{"attributes":{"source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"}},"id":"54597f58-88da-4175-9092-be786518b849","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c40ca8e-dbd6-44c2-9275-9ac330aa60ee","type":"CategoricalTicker"}},"id":"290c0f70-c21f-4eb8-9c08-79adfbc38496","type":"Grid"},{"attributes":{"data_source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"},"glyph":{"id":"aef7759e-236d-48e6-8e62-ca1542f7178c","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"afe2e7be-7213-4ae6-a353-2c3ce1b20020","type":"VBar"},"selection_glyph":null,"view":{"id":"54597f58-88da-4175-9092-be786518b849","type":"CDSView"}},"id":"8ce060ee-6cdd-4793-baa1-1d17f152ff05","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"28b0ac56-cb08-43ad-9eed-06b4d05fc8ef","type":"Range1d"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e1752089-0c2a-4177-a18a-150a116b9486","type":"Dodge"}}},"id":"f8bc2f74-c625-4b3e-86de-05112140f907","type":"VBar"},{"attributes":{"below":[{"id":"6ca1b5e2-d50f-47bf-9940-869126e0d75e","type":"CategoricalAxis"}],"left":[{"id":"18ab6b1d-6575-4999-a989-a88871401156","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"6ca1b5e2-d50f-47bf-9940-869126e0d75e","type":"CategoricalAxis"},{"id":"290c0f70-c21f-4eb8-9c08-79adfbc38496","type":"Grid"},{"id":"18ab6b1d-6575-4999-a989-a88871401156","type":"LinearAxis"},{"id":"7a2f1cff-5e9a-4ebd-82e9-3cbb3bda9291","type":"Grid"},{"id":"888549eb-ec55-40a1-b1a0-f5a3eebe4b29","type":"Legend"},{"id":"687a7013-0096-45c1-b3bd-687bf598c44b","type":"GlyphRenderer"},{"id":"8ce060ee-6cdd-4793-baa1-1d17f152ff05","type":"GlyphRenderer"},{"id":"38e2a8a5-2114-4b28-9332-5391c194ee2f","type":"GlyphRenderer"}],"title":{"id":"9be6637e-2877-4bb4-af94-2a8069c867b3","type":"Title"},"toolbar":{"id":"ef5ea03f-692c-4e22-8cd7-bb9131299558","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4e8e7b6d-d335-4bfc-8cb4-6a3eff74b285","type":"FactorRange"},"x_scale":{"id":"50b0c87b-51d8-4af8-8486-f1157fd65083","type":"CategoricalScale"},"y_range":{"id":"28b0ac56-cb08-43ad-9eed-06b4d05fc8ef","type":"Range1d"},"y_scale":{"id":"865c29d7-7fe1-45c5-9ef8-2dc8e3c4ec04","type":"LinearScale"}},"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"687a7013-0096-45c1-b3bd-687bf598c44b","type":"GlyphRenderer"}]},"id":"117fc270-bde7-4826-8326-0f0e91706609","type":"LegendItem"},{"attributes":{},"id":"0c40ca8e-dbd6-44c2-9275-9ac330aa60ee","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"},"ticker":{"id":"02b4a6c6-451d-4de9-8e05-1426be28c074","type":"BasicTicker"}},"id":"7a2f1cff-5e9a-4ebd-82e9-3cbb3bda9291","type":"Grid"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"8ce060ee-6cdd-4793-baa1-1d17f152ff05","type":"GlyphRenderer"}]},"id":"1b1167e0-9929-47f5-85c9-ad7e3ebe952c","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1f743524-e665-49db-826f-d06a3b0ee5f2","type":"Dodge"}}},"id":"aef7759e-236d-48e6-8e62-ca1542f7178c","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"38e2a8a5-2114-4b28-9332-5391c194ee2f","type":"GlyphRenderer"}]},"id":"677b7c06-76b5-4ff0-9041-3439d9762e34","type":"LegendItem"},{"attributes":{},"id":"dbbef232-b251-48c9-8374-315182531044","type":"Selection"},{"attributes":{"items":[{"id":"117fc270-bde7-4826-8326-0f0e91706609","type":"LegendItem"},{"id":"1b1167e0-9929-47f5-85c9-ad7e3ebe952c","type":"LegendItem"},{"id":"677b7c06-76b5-4ff0-9041-3439d9762e34","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"ea8d308b-daf0-4cfb-b66d-6735c05d22bc","subtype":"Figure","type":"Plot"}},"id":"888549eb-ec55-40a1-b1a0-f5a3eebe4b29","type":"Legend"},{"attributes":{"data_source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"},"glyph":{"id":"f8bc2f74-c625-4b3e-86de-05112140f907","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ba7434fc-deb0-465f-8f85-9ec19cf957cb","type":"VBar"},"selection_glyph":null,"view":{"id":"86623643-65aa-4d97-af3e-1c45d405a5a7","type":"CDSView"}},"id":"687a7013-0096-45c1-b3bd-687bf598c44b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"}},"id":"0aaa509d-4c4f-40b7-97eb-80e1d29f9277","type":"CDSView"},{"attributes":{},"id":"8dbaedfa-2439-4a35-8372-5dd9a1336138","type":"UnionRenderers"},{"attributes":{},"id":"2f85f5cb-dd69-43d7-a612-f97f4cc166e2","type":"CategoricalTickFormatter"},{"attributes":{},"id":"865c29d7-7fe1-45c5-9ef8-2dc8e3c4ec04","type":"LinearScale"},{"attributes":{"data_source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"},"glyph":{"id":"43de61a4-757d-4622-a182-9ce441040cd1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"085279b9-d4aa-43e2-9829-036d9cd35660","type":"VBar"},"selection_glyph":null,"view":{"id":"0aaa509d-4c4f-40b7-97eb-80e1d29f9277","type":"CDSView"}},"id":"38e2a8a5-2114-4b28-9332-5391c194ee2f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1f743524-e665-49db-826f-d06a3b0ee5f2","type":"Dodge"}}},"id":"afe2e7be-7213-4ae6-a353-2c3ce1b20020","type":"VBar"},{"attributes":{"range":{"id":"4e8e7b6d-d335-4bfc-8cb4-6a3eff74b285","type":"FactorRange"},"value":-0.25},"id":"e1752089-0c2a-4177-a18a-150a116b9486","type":"Dodge"},{"attributes":{},"id":"50b0c87b-51d8-4af8-8486-f1157fd65083","type":"CategoricalScale"},{"attributes":{"source":{"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"}},"id":"86623643-65aa-4d97-af3e-1c45d405a5a7","type":"CDSView"},{"attributes":{},"id":"79ac87b5-15df-4885-9ba7-3be122212800","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"4e8e7b6d-d335-4bfc-8cb4-6a3eff74b285","type":"FactorRange"},{"attributes":{},"id":"02b4a6c6-451d-4de9-8e05-1426be28c074","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"dbbef232-b251-48c9-8374-315182531044","type":"Selection"},"selection_policy":{"id":"8dbaedfa-2439-4a35-8372-5dd9a1336138","type":"UnionRenderers"}},"id":"51153a9e-d000-4608-a26c-fcbef41e8c0c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"c9f96306-6077-478a-9657-4e6df54c3170","type":"Dodge"}}},"id":"085279b9-d4aa-43e2-9829-036d9cd35660","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"ef5ea03f-692c-4e22-8cd7-bb9131299558","type":"Toolbar"},{"attributes":{"range":{"id":"4e8e7b6d-d335-4bfc-8cb4-6a3eff74b285","type":"FactorRange"}},"id":"1f743524-e665-49db-826f-d06a3b0ee5f2","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"c9f96306-6077-478a-9657-4e6df54c3170","type":"Dodge"}}},"id":"43de61a4-757d-4622-a182-9ce441040cd1","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"e1752089-0c2a-4177-a18a-150a116b9486","type":"Dodge"}}},"id":"ba7434fc-deb0-465f-8f85-9ec19cf957cb","type":"VBar"}],"root_ids":["ea8d308b-daf0-4cfb-b66d-6735c05d22bc"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3e216eaa-21b5-43a7-b943-8ed229439762","roots":{"ea8d308b-daf0-4cfb-b66d-6735c05d22bc":"8158d48d-5444-486c-9175-09178b20238b"}}];
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