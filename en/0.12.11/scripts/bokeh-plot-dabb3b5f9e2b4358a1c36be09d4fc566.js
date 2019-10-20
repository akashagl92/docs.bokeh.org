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
      };var element = document.getElementById("f09214c7-1caf-4c3a-bfef-53b510a0888e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f09214c7-1caf-4c3a-bfef-53b510a0888e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"f346047d-db1a-4e4e-bd6c-d6c33666cf16":{"roots":{"references":[{"attributes":{},"id":"95c6abfe-ceb7-4b96-9721-cdb351c0276d","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3bcf750b-d0ba-475b-a41c-fb3b4711fcbc","type":"CategoricalScale"},{"attributes":{"below":[{"id":"e233bd7e-3582-4dc4-ac43-c79d2f94f1ef","type":"CategoricalAxis"}],"left":[{"id":"831af9a1-b0f5-4d37-98b6-d9c926902ec0","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"e233bd7e-3582-4dc4-ac43-c79d2f94f1ef","type":"CategoricalAxis"},{"id":"5d324c69-e4d9-42b0-9a9d-c7b281d385f7","type":"Grid"},{"id":"831af9a1-b0f5-4d37-98b6-d9c926902ec0","type":"LinearAxis"},{"id":"d8a23e6b-3e3e-49ee-9ad6-048a3c8f5920","type":"Grid"},{"id":"e1603ff9-18f4-44a3-8c57-3d783f77d648","type":"GlyphRenderer"}],"title":{"id":"0d69392f-21f6-42bd-979e-aee4d8cfefcf","type":"Title"},"toolbar":{"id":"80141634-947f-40b7-9835-80daa04e3273","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7e066590-0b7e-40a4-8737-ec3f16ce45a8","type":"FactorRange"},"x_scale":{"id":"3bcf750b-d0ba-475b-a41c-fb3b4711fcbc","type":"CategoricalScale"},"y_range":{"id":"a5689b52-6045-4be6-8b0f-f90725bc573b","type":"DataRange1d"},"y_scale":{"id":"2da6d5c6-c691-4230-8604-dc391e098679","type":"LinearScale"}},"id":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"0d69392f-21f6-42bd-979e-aee4d8cfefcf","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"fa09b01d-1d19-4e57-9b7e-674b2c902590","type":"VBar"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"ce813bbd-f6ba-47d9-b2bf-d23b454a39b2","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"ecb222cf-fd05-4702-a04c-b1c97229e495","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0c71957-525d-4fb5-91f0-b7e18d7a69ea","type":"CategoricalTicker"}},"id":"5d324c69-e4d9-42b0-9a9d-c7b281d385f7","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"b162849e-1f8e-4961-a8d0-5d176c53399e","type":"ColumnDataSource"},{"attributes":{},"id":"2da6d5c6-c691-4230-8604-dc391e098679","type":"LinearScale"},{"attributes":{},"id":"b0c71957-525d-4fb5-91f0-b7e18d7a69ea","type":"CategoricalTicker"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"ce813bbd-f6ba-47d9-b2bf-d23b454a39b2","type":"CategoricalColorMapper"},{"attributes":{"data_source":{"id":"b162849e-1f8e-4961-a8d0-5d176c53399e","type":"ColumnDataSource"},"glyph":{"id":"ecb222cf-fd05-4702-a04c-b1c97229e495","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa09b01d-1d19-4e57-9b7e-674b2c902590","type":"VBar"},"selection_glyph":null,"view":{"id":"efb077f3-1a9a-42bd-bbdc-d776ab910e29","type":"CDSView"}},"id":"e1603ff9-18f4-44a3-8c57-3d783f77d648","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"03c232e8-8c7c-4113-bf37-abbac03c2ce4","type":"BasicTickFormatter"},"plot":{"id":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c20e2b85-fd27-4a78-8890-817e756201cf","type":"BasicTicker"}},"id":"831af9a1-b0f5-4d37-98b6-d9c926902ec0","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"a5689b52-6045-4be6-8b0f-f90725bc573b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95c6abfe-ceb7-4b96-9721-cdb351c0276d","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0c71957-525d-4fb5-91f0-b7e18d7a69ea","type":"CategoricalTicker"}},"id":"e233bd7e-3582-4dc4-ac43-c79d2f94f1ef","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"80141634-947f-40b7-9835-80daa04e3273","type":"Toolbar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"7e066590-0b7e-40a4-8737-ec3f16ce45a8","type":"FactorRange"},{"attributes":{"source":{"id":"b162849e-1f8e-4961-a8d0-5d176c53399e","type":"ColumnDataSource"}},"id":"efb077f3-1a9a-42bd-bbdc-d776ab910e29","type":"CDSView"},{"attributes":{},"id":"c20e2b85-fd27-4a78-8890-817e756201cf","type":"BasicTicker"},{"attributes":{},"id":"03c232e8-8c7c-4113-bf37-abbac03c2ce4","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c20e2b85-fd27-4a78-8890-817e756201cf","type":"BasicTicker"}},"id":"d8a23e6b-3e3e-49ee-9ad6-048a3c8f5920","type":"Grid"}],"root_ids":["5df6abe5-0d0e-49bc-a35f-6e9249b540b7"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"f346047d-db1a-4e4e-bd6c-d6c33666cf16","elementid":"f09214c7-1caf-4c3a-bfef-53b510a0888e","modelid":"5df6abe5-0d0e-49bc-a35f-6e9249b540b7"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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