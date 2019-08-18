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
      };var element = document.getElementById("bc445435-d7e3-4594-88a9-18c1fb00bb7e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc445435-d7e3-4594-88a9-18c1fb00bb7e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17bd09d5-972e-4466-a3c8-37c5994d76cf":{"roots":{"references":[{"attributes":{},"id":"ab3ae8fa-98b2-420c-87d8-ba60443debe1","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"334c9494-8dc7-4cb3-aed6-d90a0d186b94","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"b9483946-5e5b-4d35-8cd1-a4ccb9389a53","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab3ae8fa-98b2-420c-87d8-ba60443debe1","type":"BasicTicker"}},"id":"95edc384-a642-47d0-a255-7ae11996fb6a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e80bf144-f040-4342-81da-0d9dc3c853dd","type":"VBar"},{"attributes":{},"id":"c4f3e4fd-b6de-4f39-975d-b75e03f10b01","type":"Selection"},{"attributes":{"data_source":{"id":"761401a3-998b-41f5-ab3a-e084a2404f81","type":"ColumnDataSource"},"glyph":{"id":"334c9494-8dc7-4cb3-aed6-d90a0d186b94","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e80bf144-f040-4342-81da-0d9dc3c853dd","type":"VBar"},"selection_glyph":null,"view":{"id":"89f22655-d76a-40e8-8eb3-0a354987ffa7","type":"CDSView"}},"id":"5dcfb43c-d18f-419d-82dd-35d2cb5f6599","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"c4f3e4fd-b6de-4f39-975d-b75e03f10b01","type":"Selection"},"selection_policy":{"id":"935f586b-f007-4341-85b7-4e331068fa5e","type":"UnionRenderers"}},"id":"761401a3-998b-41f5-ab3a-e084a2404f81","type":"ColumnDataSource"},{"attributes":{"source":{"id":"761401a3-998b-41f5-ab3a-e084a2404f81","type":"ColumnDataSource"}},"id":"89f22655-d76a-40e8-8eb3-0a354987ffa7","type":"CDSView"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"03819e30-b709-4c3d-b598-172da1905e64","type":"FactorRange"},{"attributes":{},"id":"53b4d426-32f6-4c75-b77b-be804fe8f56a","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"7faf4aa7-19b8-4fc9-97da-185013b4dc4e","type":"CategoricalAxis"}],"left":[{"id":"69d405ac-04c8-4b62-9f9c-ac4fe773745e","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"7faf4aa7-19b8-4fc9-97da-185013b4dc4e","type":"CategoricalAxis"},{"id":"9324821a-16e2-41b2-943b-640aa11bc7ad","type":"Grid"},{"id":"69d405ac-04c8-4b62-9f9c-ac4fe773745e","type":"LinearAxis"},{"id":"95edc384-a642-47d0-a255-7ae11996fb6a","type":"Grid"},{"id":"5dcfb43c-d18f-419d-82dd-35d2cb5f6599","type":"GlyphRenderer"}],"title":{"id":"61b68524-1216-421b-b3ca-144e34ff29dd","type":"Title"},"toolbar":{"id":"8301bf5e-8358-463b-b77d-f15689b0463f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"03819e30-b709-4c3d-b598-172da1905e64","type":"FactorRange"},"x_scale":{"id":"98e94557-3876-4867-971d-843c0b93b513","type":"CategoricalScale"},"y_range":{"id":"2c88f599-b9f8-42af-9f14-cbdff07bcb66","type":"DataRange1d"},"y_scale":{"id":"c79324b7-12f9-4b1f-b698-cc156be7f1d5","type":"LinearScale"}},"id":"b9483946-5e5b-4d35-8cd1-a4ccb9389a53","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"61b68524-1216-421b-b3ca-144e34ff29dd","type":"Title"},{"attributes":{},"id":"1afa26c1-87c5-4fbc-9d13-2caee61b6fdf","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"2c88f599-b9f8-42af-9f14-cbdff07bcb66","type":"DataRange1d"},{"attributes":{},"id":"935f586b-f007-4341-85b7-4e331068fa5e","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"8301bf5e-8358-463b-b77d-f15689b0463f","type":"Toolbar"},{"attributes":{"formatter":{"id":"1afa26c1-87c5-4fbc-9d13-2caee61b6fdf","type":"BasicTickFormatter"},"plot":{"id":"b9483946-5e5b-4d35-8cd1-a4ccb9389a53","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab3ae8fa-98b2-420c-87d8-ba60443debe1","type":"BasicTicker"}},"id":"69d405ac-04c8-4b62-9f9c-ac4fe773745e","type":"LinearAxis"},{"attributes":{},"id":"c79324b7-12f9-4b1f-b698-cc156be7f1d5","type":"LinearScale"},{"attributes":{},"id":"98e94557-3876-4867-971d-843c0b93b513","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b9483946-5e5b-4d35-8cd1-a4ccb9389a53","subtype":"Figure","type":"Plot"},"ticker":{"id":"102ee7fe-628e-4396-b48e-5a3cf759e2d2","type":"CategoricalTicker"}},"id":"9324821a-16e2-41b2-943b-640aa11bc7ad","type":"Grid"},{"attributes":{"formatter":{"id":"53b4d426-32f6-4c75-b77b-be804fe8f56a","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"b9483946-5e5b-4d35-8cd1-a4ccb9389a53","subtype":"Figure","type":"Plot"},"ticker":{"id":"102ee7fe-628e-4396-b48e-5a3cf759e2d2","type":"CategoricalTicker"}},"id":"7faf4aa7-19b8-4fc9-97da-185013b4dc4e","type":"CategoricalAxis"},{"attributes":{},"id":"102ee7fe-628e-4396-b48e-5a3cf759e2d2","type":"CategoricalTicker"}],"root_ids":["b9483946-5e5b-4d35-8cd1-a4ccb9389a53"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"17bd09d5-972e-4466-a3c8-37c5994d76cf","roots":{"b9483946-5e5b-4d35-8cd1-a4ccb9389a53":"bc445435-d7e3-4594-88a9-18c1fb00bb7e"}}];
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