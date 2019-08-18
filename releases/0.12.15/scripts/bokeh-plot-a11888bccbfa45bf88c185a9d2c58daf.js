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
      };var element = document.getElementById("df2a659f-73e7-4e55-93e1-fb0ff20c14ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df2a659f-73e7-4e55-93e1-fb0ff20c14ed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f001893d-a209-469e-a68c-bc37c1ce2b15":{"roots":{"references":[{"attributes":{"fields":["2015","2016"]},"id":"4bc523e8-59a6-42e8-ba92-5c589ad3dcaa","type":"Stack"},{"attributes":{},"id":"1473e18c-747f-4cb9-bc84-ff340da18285","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9ddac661-e3bb-4841-bd01-007397b607d9","type":"BasicTicker"},{"attributes":{},"id":"68a933a3-d9f8-4d84-9fb8-1e7745d69c33","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"10bb227c-f515-47f5-bc9c-699a4dfed69c","type":"Title"},{"attributes":{"fields":["2015","2016","2017"]},"id":"25f5be6e-1208-41b7-94d5-b7d913596998","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"527cbbb8-0109-4e85-ad42-9ffe85242cb8","type":"GlyphRenderer"}]},"id":"383f1531-bff9-415a-ae21-f191e374709e","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"9b244656-a25c-42b7-8c62-8ac81d1d0fb7","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"12cdc6eb-7692-41b4-83fa-5bf786fcbca8","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"03c1a572-08a6-48d3-919f-8baff6dd6dac","type":"VBar"},{"attributes":{"fields":["2015"]},"id":"fa1d759c-0713-44ac-b87e-c52cbab16c22","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"41ab59c6-0536-4918-b21e-e7ac082ef597","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"fa1d759c-0713-44ac-b87e-c52cbab16c22","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3173209a-0e75-401c-871e-61d3bf2fb871","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ddac661-e3bb-4841-bd01-007397b607d9","type":"BasicTicker"}},"id":"2e511d7c-1c97-401b-b238-1bb0b11bd9ee","type":"Grid"},{"attributes":{"data_source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"},"glyph":{"id":"fa34b57d-bf66-4d53-a1e5-e964a3011d10","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dfdd1064-66e5-4060-a8a2-7f98aaf91d10","type":"VBar"},"selection_glyph":null,"view":{"id":"7b338750-a071-47f2-bea2-074ac8182d3f","type":"CDSView"}},"id":"bd062473-fd43-4493-9b33-8cfeb0d65657","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"32f30691-f4eb-42d2-8730-1238262b9ba9","type":"GlyphRenderer"}]},"id":"9293df21-c57e-41b9-a202-fa715a97ebc3","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"9b244656-a25c-42b7-8c62-8ac81d1d0fb7","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"12cdc6eb-7692-41b4-83fa-5bf786fcbca8","type":"Stack"},{"attributes":{"formatter":{"id":"68a933a3-d9f8-4d84-9fb8-1e7745d69c33","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ddac661-e3bb-4841-bd01-007397b607d9","type":"BasicTicker"}},"id":"9ef0833e-2e32-41b1-8667-a5c4ca4a977d","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"41ab59c6-0536-4918-b21e-e7ac082ef597","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"fa1d759c-0713-44ac-b87e-c52cbab16c22","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"aad7627c-8812-4483-8921-4a9d6d5eeb7d","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"266e6260-ea74-4c74-bb99-1cc7e09ad8b8","type":"Toolbar"},{"attributes":{},"id":"5ce1ea6d-f63f-47e9-95d6-9fe3603bde2a","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"},"glyph":{"id":"004874db-d9eb-4e6c-99ea-255343cc0ea3","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"03c1a572-08a6-48d3-919f-8baff6dd6dac","type":"VBar"},"selection_glyph":null,"view":{"id":"c2f0fc36-f2ed-4d93-a90b-b4f3a7ea36bc","type":"CDSView"}},"id":"527cbbb8-0109-4e85-ad42-9ffe85242cb8","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1473e18c-747f-4cb9-bc84-ff340da18285","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a3c8c63-56ac-47e8-8492-5d9065d6c52f","type":"CategoricalTicker"}},"id":"df69d7cf-b580-418c-b6c6-48210b2a7511","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"9293df21-c57e-41b9-a202-fa715a97ebc3","type":"LegendItem"},{"id":"383f1531-bff9-415a-ae21-f191e374709e","type":"LegendItem"},{"id":"78488cb3-5775-459e-b1c7-5809ee3faa89","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"}},"id":"4edb7386-9bdd-4920-a62a-ad3d09373776","type":"Legend"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"},"glyph":{"id":"aad7627c-8812-4483-8921-4a9d6d5eeb7d","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3173209a-0e75-401c-871e-61d3bf2fb871","type":"VBar"},"selection_glyph":null,"view":{"id":"2d0804e8-7ed4-4b6f-b428-cf029c9268f8","type":"CDSView"}},"id":"32f30691-f4eb-42d2-8730-1238262b9ba9","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"4bc523e8-59a6-42e8-ba92-5c589ad3dcaa","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"25f5be6e-1208-41b7-94d5-b7d913596998","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"dfdd1064-66e5-4060-a8a2-7f98aaf91d10","type":"VBar"},{"attributes":{},"id":"4a3c8c63-56ac-47e8-8492-5d9065d6c52f","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"9b244656-a25c-42b7-8c62-8ac81d1d0fb7","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"12cdc6eb-7692-41b4-83fa-5bf786fcbca8","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"004874db-d9eb-4e6c-99ea-255343cc0ea3","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"bd062473-fd43-4493-9b33-8cfeb0d65657","type":"GlyphRenderer"}]},"id":"78488cb3-5775-459e-b1c7-5809ee3faa89","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a3c8c63-56ac-47e8-8492-5d9065d6c52f","type":"CategoricalTicker"}},"id":"ae8073a2-ef6b-4f05-b050-e6f654cf30fe","type":"Grid"},{"attributes":{"below":[{"id":"df69d7cf-b580-418c-b6c6-48210b2a7511","type":"CategoricalAxis"}],"left":[{"id":"9ef0833e-2e32-41b1-8667-a5c4ca4a977d","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"df69d7cf-b580-418c-b6c6-48210b2a7511","type":"CategoricalAxis"},{"id":"ae8073a2-ef6b-4f05-b050-e6f654cf30fe","type":"Grid"},{"id":"9ef0833e-2e32-41b1-8667-a5c4ca4a977d","type":"LinearAxis"},{"id":"2e511d7c-1c97-401b-b238-1bb0b11bd9ee","type":"Grid"},{"id":"4edb7386-9bdd-4920-a62a-ad3d09373776","type":"Legend"},{"id":"32f30691-f4eb-42d2-8730-1238262b9ba9","type":"GlyphRenderer"},{"id":"527cbbb8-0109-4e85-ad42-9ffe85242cb8","type":"GlyphRenderer"},{"id":"bd062473-fd43-4493-9b33-8cfeb0d65657","type":"GlyphRenderer"}],"title":{"id":"10bb227c-f515-47f5-bc9c-699a4dfed69c","type":"Title"},"toolbar":{"id":"266e6260-ea74-4c74-bb99-1cc7e09ad8b8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"43cbf6ea-6a7a-4ddb-9575-ad57dbe36e34","type":"FactorRange"},"x_scale":{"id":"5ce1ea6d-f63f-47e9-95d6-9fe3603bde2a","type":"CategoricalScale"},"y_range":{"id":"484cc77f-cf92-4ad3-8e29-dc12a989fc25","type":"DataRange1d"},"y_scale":{"id":"dd06cc30-4d90-4c62-a67c-3354743d6561","type":"LinearScale"}},"id":"af61f0df-3cb1-475c-abf4-a8edb107d0dd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"484cc77f-cf92-4ad3-8e29-dc12a989fc25","type":"DataRange1d"},{"attributes":{"source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"}},"id":"c2f0fc36-f2ed-4d93-a90b-b4f3a7ea36bc","type":"CDSView"},{"attributes":{"source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"}},"id":"7b338750-a071-47f2-bea2-074ac8182d3f","type":"CDSView"},{"attributes":{},"id":"dd06cc30-4d90-4c62-a67c-3354743d6561","type":"LinearScale"},{"attributes":{"source":{"id":"99cbfddb-053d-4e64-abb9-589bc36b24cc","type":"ColumnDataSource"}},"id":"2d0804e8-7ed4-4b6f-b428-cf029c9268f8","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"4bc523e8-59a6-42e8-ba92-5c589ad3dcaa","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"25f5be6e-1208-41b7-94d5-b7d913596998","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"fa34b57d-bf66-4d53-a1e5-e964a3011d10","type":"VBar"},{"attributes":{"fields":[]},"id":"41ab59c6-0536-4918-b21e-e7ac082ef597","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"43cbf6ea-6a7a-4ddb-9575-ad57dbe36e34","type":"FactorRange"}],"root_ids":["af61f0df-3cb1-475c-abf4-a8edb107d0dd"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"f001893d-a209-469e-a68c-bc37c1ce2b15","elementid":"df2a659f-73e7-4e55-93e1-fb0ff20c14ed","modelid":"af61f0df-3cb1-475c-abf4-a8edb107d0dd"}];
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