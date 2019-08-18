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
      };var element = document.getElementById("0ed8b20e-ebcc-4952-86e6-3e5022e2a58c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0ed8b20e-ebcc-4952-86e6-3e5022e2a58c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"e305f0c6-5a2f-4303-862d-28e213756261":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1050278-ea30-4fe3-aa99-466d67146434","type":"CategoricalTicker"}},"id":"12d278e9-4c40-4bd3-9364-97c9dd643f79","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"74ee774d-f4dd-414b-bfd0-0eaa4281ff00","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"088fa191-8b2f-428b-a90c-b8babc421428","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"64e4afb5-4949-4fe4-baae-6af1071f7978","type":"VBar"},{"attributes":{"fields":["2015"]},"id":"088fa191-8b2f-428b-a90c-b8babc421428","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"0ce5d0f6-c610-482a-87d4-76d45624c170","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"880c7b28-5321-449f-9421-72bcfcdf9f90","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"59214327-2a79-47e7-b878-d7dcf24fff63","type":"VBar"},{"attributes":{"data_source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"},"glyph":{"id":"95b162d6-e0c6-480a-a40e-2707ab570a09","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ea466d6c-f5c2-4ce6-a83a-77575a12a625","type":"VBar"},"selection_glyph":null,"view":{"id":"781c4351-791a-443a-af15-3fe2c4eb3f34","type":"CDSView"}},"id":"7e0bf149-ff14-480c-8fe8-512767155750","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"613dcf37-f1fd-43fc-9ed4-69fafaeed607","type":"Stack"},{"attributes":{"source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"}},"id":"781c4351-791a-443a-af15-3fe2c4eb3f34","type":"CDSView"},{"attributes":{},"id":"5a1c300a-cc9f-46f1-8f56-6c29a8f517fa","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f85343f-4122-4348-b37a-8921e983df33","type":"BasicTicker"}},"id":"b509b241-083a-40a9-95d1-0e0a16e7388e","type":"Grid"},{"attributes":{"below":[{"id":"4d818746-a65a-43da-94e3-0dbd4ca68176","type":"CategoricalAxis"}],"left":[{"id":"e9bd7488-31f6-49f0-af8a-2155e8f17e32","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"4d818746-a65a-43da-94e3-0dbd4ca68176","type":"CategoricalAxis"},{"id":"12d278e9-4c40-4bd3-9364-97c9dd643f79","type":"Grid"},{"id":"e9bd7488-31f6-49f0-af8a-2155e8f17e32","type":"LinearAxis"},{"id":"b509b241-083a-40a9-95d1-0e0a16e7388e","type":"Grid"},{"id":"492035b7-8fdc-44d8-83d8-a20d4087640a","type":"Legend"},{"id":"af8f774c-a5ce-4ae4-864c-e5adb40801ff","type":"GlyphRenderer"},{"id":"5d777a4b-84b1-4d72-ba8c-3fbd9f413af3","type":"GlyphRenderer"},{"id":"7e0bf149-ff14-480c-8fe8-512767155750","type":"GlyphRenderer"}],"title":{"id":"b8713225-5260-4ec8-89e6-0ce15781253f","type":"Title"},"toolbar":{"id":"07575865-4506-4e0a-96b6-67f6188a8d47","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1b18d51c-44a1-4335-a047-b847f245323e","type":"FactorRange"},"x_scale":{"id":"57eed3ee-a949-420f-b77f-9f4c383eed8d","type":"CategoricalScale"},"y_range":{"id":"92e027fc-da3d-48bd-83f7-904c7d9442e3","type":"DataRange1d"},"y_scale":{"id":"5a1c300a-cc9f-46f1-8f56-6c29a8f517fa","type":"LinearScale"}},"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"7e0bf149-ff14-480c-8fe8-512767155750","type":"GlyphRenderer"}]},"id":"6127a7c4-f5fa-43b8-be01-6913a4622951","type":"LegendItem"},{"attributes":{"fields":[]},"id":"74ee774d-f4dd-414b-bfd0-0eaa4281ff00","type":"Stack"},{"attributes":{},"id":"e1404fb9-ea9b-45a4-9f06-e652aee13513","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"92e027fc-da3d-48bd-83f7-904c7d9442e3","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"b8713225-5260-4ec8-89e6-0ce15781253f","type":"Title"},{"attributes":{"fields":["2015","2016","2017"]},"id":"e1eb4c55-8476-4f7b-9272-b46de0f13b11","type":"Stack"},{"attributes":{"data_source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"},"glyph":{"id":"2874c628-a667-4016-be7b-87748ee45321","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"64e4afb5-4949-4fe4-baae-6af1071f7978","type":"VBar"},"selection_glyph":null,"view":{"id":"70d238f6-c265-4bfb-ab42-a5ab86405bef","type":"CDSView"}},"id":"af8f774c-a5ce-4ae4-864c-e5adb40801ff","type":"GlyphRenderer"},{"attributes":{"source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"}},"id":"70d238f6-c265-4bfb-ab42-a5ab86405bef","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"74ee774d-f4dd-414b-bfd0-0eaa4281ff00","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"088fa191-8b2f-428b-a90c-b8babc421428","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2874c628-a667-4016-be7b-87748ee45321","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"880c7b28-5321-449f-9421-72bcfcdf9f90","type":"Stack"},{"attributes":{"data_source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"},"glyph":{"id":"59214327-2a79-47e7-b878-d7dcf24fff63","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8617b7c8-9380-4929-8e56-97f586cb800b","type":"VBar"},"selection_glyph":null,"view":{"id":"7d51e516-afec-433f-a369-44f07a5c5f9a","type":"CDSView"}},"id":"5d777a4b-84b1-4d72-ba8c-3fbd9f413af3","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"1b18d51c-44a1-4335-a047-b847f245323e","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"0ce5d0f6-c610-482a-87d4-76d45624c170","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"880c7b28-5321-449f-9421-72bcfcdf9f90","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"8617b7c8-9380-4929-8e56-97f586cb800b","type":"VBar"},{"attributes":{},"id":"f1050278-ea30-4fe3-aa99-466d67146434","type":"CategoricalTicker"},{"attributes":{"source":{"id":"dcac09e5-21d1-4f96-b20e-723a71859e17","type":"ColumnDataSource"}},"id":"7d51e516-afec-433f-a369-44f07a5c5f9a","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"613dcf37-f1fd-43fc-9ed4-69fafaeed607","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"e1eb4c55-8476-4f7b-9272-b46de0f13b11","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ea466d6c-f5c2-4ce6-a83a-77575a12a625","type":"VBar"},{"attributes":{},"id":"8ef7cfa9-79e5-4e67-a96e-d4543e4db906","type":"BasicTickFormatter"},{"attributes":{"fields":["2015"]},"id":"0ce5d0f6-c610-482a-87d4-76d45624c170","type":"Stack"},{"attributes":{"items":[{"id":"cfe15fd5-429b-413c-994b-f62e740910cf","type":"LegendItem"},{"id":"ef71fb0e-ea70-4634-a14c-ea8746f445e4","type":"LegendItem"},{"id":"6127a7c4-f5fa-43b8-be01-6913a4622951","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"}},"id":"492035b7-8fdc-44d8-83d8-a20d4087640a","type":"Legend"},{"attributes":{"formatter":{"id":"8ef7cfa9-79e5-4e67-a96e-d4543e4db906","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f85343f-4122-4348-b37a-8921e983df33","type":"BasicTicker"}},"id":"e9bd7488-31f6-49f0-af8a-2155e8f17e32","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e1404fb9-ea9b-45a4-9f06-e652aee13513","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1050278-ea30-4fe3-aa99-466d67146434","type":"CategoricalTicker"}},"id":"4d818746-a65a-43da-94e3-0dbd4ca68176","type":"CategoricalAxis"},{"attributes":{},"id":"4f85343f-4122-4348-b37a-8921e983df33","type":"BasicTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"af8f774c-a5ce-4ae4-864c-e5adb40801ff","type":"GlyphRenderer"}]},"id":"cfe15fd5-429b-413c-994b-f62e740910cf","type":"LegendItem"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"5d777a4b-84b1-4d72-ba8c-3fbd9f413af3","type":"GlyphRenderer"}]},"id":"ef71fb0e-ea70-4634-a14c-ea8746f445e4","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"07575865-4506-4e0a-96b6-67f6188a8d47","type":"Toolbar"},{"attributes":{},"id":"57eed3ee-a949-420f-b77f-9f4c383eed8d","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"613dcf37-f1fd-43fc-9ed4-69fafaeed607","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"e1eb4c55-8476-4f7b-9272-b46de0f13b11","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"95b162d6-e0c6-480a-a40e-2707ab570a09","type":"VBar"}],"root_ids":["5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"e305f0c6-5a2f-4303-862d-28e213756261","elementid":"0ed8b20e-ebcc-4952-86e6-3e5022e2a58c","modelid":"5b87aff4-cdd0-49c5-b3bc-e64e5f852fa2"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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