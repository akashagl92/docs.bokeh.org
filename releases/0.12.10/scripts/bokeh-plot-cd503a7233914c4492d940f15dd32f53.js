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
      };var element = document.getElementById("72bc4f88-e1e2-477a-bdbb-da47a8187804");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '72bc4f88-e1e2-477a-bdbb-da47a8187804' but no matching script tag was found. ")
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
                    var docs_json = {"4bcfdc24-4ee8-46bd-b72a-5d17a8ae9cfd":{"roots":{"references":[{"attributes":{},"id":"45f0534c-4b31-407f-9f0b-c9a4b431faad","type":"CategoricalScale"},{"attributes":{"source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"}},"id":"bd606e68-97f4-4d60-863f-c3b388ec84c8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21620e4b-9b8a-4c0b-b2d5-b0036949bfc4","type":"Dodge"}}},"id":"0cabeb19-0257-404a-b79a-a515dfcbf1fc","type":"VBar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"21620e4b-9b8a-4c0b-b2d5-b0036949bfc4","type":"Dodge"}}},"id":"ad486356-cf5c-4dc8-84e4-5c263c814a08","type":"VBar"},{"attributes":{"items":[{"id":"2600528a-de0a-4686-bbbf-fc7df7a9a9f5","type":"LegendItem"},{"id":"4d702fbe-c052-44b6-bcb9-dbd2e7a9af83","type":"LegendItem"},{"id":"c358e9ab-cb7f-476d-b225-b2b5a0411b89","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"}},"id":"a0368110-f787-457a-b4ce-3fc3bea2ced9","type":"Legend"},{"attributes":{"range":{"id":"aa39423a-4f9d-4257-8f1e-9f06b972a624","type":"FactorRange"},"value":0.25},"id":"21620e4b-9b8a-4c0b-b2d5-b0036949bfc4","type":"Dodge"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"a852f413-7d52-4b03-a4d5-de3121bee2c8","type":"GlyphRenderer"}]},"id":"2600528a-de0a-4686-bbbf-fc7df7a9a9f5","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"5c54412e-bad8-4275-b6fb-33c21f0155b8","type":"Dodge"}}},"id":"68d415d3-50d6-4e39-929a-c42f23b5625b","type":"VBar"},{"attributes":{},"id":"747c57d8-7fb0-4d1c-b322-c805c2e20d57","type":"LinearScale"},{"attributes":{"formatter":{"id":"07fb063d-caff-44d2-b6fb-1b90bd209189","type":"CategoricalTickFormatter"},"plot":{"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"},"ticker":{"id":"da8fd0a4-1d55-42c2-8f9b-614915cb9cb4","type":"CategoricalTicker"}},"id":"b8ff06ef-f37d-4e18-923e-63bb8ed6d431","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"},"ticker":{"id":"da8fd0a4-1d55-42c2-8f9b-614915cb9cb4","type":"CategoricalTicker"}},"id":"ca5634b4-95de-4ca9-a4bb-4fde2409694e","type":"Grid"},{"attributes":{"data_source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"},"glyph":{"id":"68d415d3-50d6-4e39-929a-c42f23b5625b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7751ddd1-f1c9-4d8a-9d4d-a804751c6eb4","type":"VBar"},"selection_glyph":null,"view":{"id":"bd606e68-97f4-4d60-863f-c3b388ec84c8","type":"CDSView"}},"id":"a852f413-7d52-4b03-a4d5-de3121bee2c8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"},"glyph":{"id":"05fa3c99-5fdb-4ffa-8541-69876e01b652","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f3adaecf-1dbf-4809-9dd0-470e9ffff5b5","type":"VBar"},"selection_glyph":null,"view":{"id":"a4a4324f-6f64-4d57-8227-119e1e28fe2c","type":"CDSView"}},"id":"19612086-ea32-4360-b588-020764c466ef","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"aa39423a-4f9d-4257-8f1e-9f06b972a624","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"bdb84d0a-e8d7-45ff-8ff6-bed5bf093188","type":"Dodge"}}},"id":"f3adaecf-1dbf-4809-9dd0-470e9ffff5b5","type":"VBar"},{"attributes":{"source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"}},"id":"a4a4324f-6f64-4d57-8227-119e1e28fe2c","type":"CDSView"},{"attributes":{},"id":"5cc1ce46-a6f0-4f76-9bc4-63312aab1997","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"},{"attributes":{"source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"}},"id":"0a81a310-ae51-4193-b2be-119163676483","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"19612086-ea32-4360-b588-020764c466ef","type":"GlyphRenderer"}]},"id":"4d702fbe-c052-44b6-bcb9-dbd2e7a9af83","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cf624a1a-59ff-4b73-bd7c-1809dcb5b69a","type":"Toolbar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"abcd992e-3d39-4540-bf2b-d07526993341","type":"GlyphRenderer"}]},"id":"c358e9ab-cb7f-476d-b225-b2b5a0411b89","type":"LegendItem"},{"attributes":{"callback":null,"end":10},"id":"557ef101-ac84-4c79-836b-eff4458dd6bd","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"5c54412e-bad8-4275-b6fb-33c21f0155b8","type":"Dodge"}}},"id":"7751ddd1-f1c9-4d8a-9d4d-a804751c6eb4","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"e0f8e913-ed91-4c54-8301-8852d9084a2b","type":"Title"},{"attributes":{"below":[{"id":"b8ff06ef-f37d-4e18-923e-63bb8ed6d431","type":"CategoricalAxis"}],"left":[{"id":"1c71b552-801c-443c-bec2-34e14cf48376","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"b8ff06ef-f37d-4e18-923e-63bb8ed6d431","type":"CategoricalAxis"},{"id":"ca5634b4-95de-4ca9-a4bb-4fde2409694e","type":"Grid"},{"id":"1c71b552-801c-443c-bec2-34e14cf48376","type":"LinearAxis"},{"id":"c1ddd2cc-1b67-4b76-90c1-3cfdc8846491","type":"Grid"},{"id":"a0368110-f787-457a-b4ce-3fc3bea2ced9","type":"Legend"},{"id":"a852f413-7d52-4b03-a4d5-de3121bee2c8","type":"GlyphRenderer"},{"id":"19612086-ea32-4360-b588-020764c466ef","type":"GlyphRenderer"},{"id":"abcd992e-3d39-4540-bf2b-d07526993341","type":"GlyphRenderer"}],"title":{"id":"e0f8e913-ed91-4c54-8301-8852d9084a2b","type":"Title"},"toolbar":{"id":"cf624a1a-59ff-4b73-bd7c-1809dcb5b69a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"aa39423a-4f9d-4257-8f1e-9f06b972a624","type":"FactorRange"},"x_scale":{"id":"45f0534c-4b31-407f-9f0b-c9a4b431faad","type":"CategoricalScale"},"y_range":{"id":"557ef101-ac84-4c79-836b-eff4458dd6bd","type":"Range1d"},"y_scale":{"id":"747c57d8-7fb0-4d1c-b322-c805c2e20d57","type":"LinearScale"}},"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"bdb84d0a-e8d7-45ff-8ff6-bed5bf093188","type":"Dodge"}}},"id":"05fa3c99-5fdb-4ffa-8541-69876e01b652","type":"VBar"},{"attributes":{},"id":"da8fd0a4-1d55-42c2-8f9b-614915cb9cb4","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"efbfc8f4-9df2-4de8-98cc-dfe87e5086e0","type":"ColumnDataSource"},"glyph":{"id":"ad486356-cf5c-4dc8-84e4-5c263c814a08","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0cabeb19-0257-404a-b79a-a515dfcbf1fc","type":"VBar"},"selection_glyph":null,"view":{"id":"0a81a310-ae51-4193-b2be-119163676483","type":"CDSView"}},"id":"abcd992e-3d39-4540-bf2b-d07526993341","type":"GlyphRenderer"},{"attributes":{"range":{"id":"aa39423a-4f9d-4257-8f1e-9f06b972a624","type":"FactorRange"},"value":-0.25},"id":"5c54412e-bad8-4275-b6fb-33c21f0155b8","type":"Dodge"},{"attributes":{"range":{"id":"aa39423a-4f9d-4257-8f1e-9f06b972a624","type":"FactorRange"}},"id":"bdb84d0a-e8d7-45ff-8ff6-bed5bf093188","type":"Dodge"},{"attributes":{"formatter":{"id":"5cc1ce46-a6f0-4f76-9bc4-63312aab1997","type":"BasicTickFormatter"},"plot":{"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"},"ticker":{"id":"b389d0e6-ac74-4105-a2ca-8f514650ac6b","type":"BasicTicker"}},"id":"1c71b552-801c-443c-bec2-34e14cf48376","type":"LinearAxis"},{"attributes":{},"id":"07fb063d-caff-44d2-b6fb-1b90bd209189","type":"CategoricalTickFormatter"},{"attributes":{},"id":"b389d0e6-ac74-4105-a2ca-8f514650ac6b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1a58c161-8c63-447a-9229-33cdea83d363","subtype":"Figure","type":"Plot"},"ticker":{"id":"b389d0e6-ac74-4105-a2ca-8f514650ac6b","type":"BasicTicker"}},"id":"c1ddd2cc-1b67-4b76-90c1-3cfdc8846491","type":"Grid"}],"root_ids":["1a58c161-8c63-447a-9229-33cdea83d363"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"4bcfdc24-4ee8-46bd-b72a-5d17a8ae9cfd","elementid":"72bc4f88-e1e2-477a-bdbb-da47a8187804","modelid":"1a58c161-8c63-447a-9229-33cdea83d363"}];
                
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
