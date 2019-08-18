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
      };var element = document.getElementById("e76e27f1-678f-435f-8325-fa38f051b2ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e76e27f1-678f-435f-8325-fa38f051b2ea' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e9794781-7d02-455c-9c43-28f81c355f9a":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"be43c169-36b3-4d81-bbc8-987308c4a7d0","type":"VBar"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"68bfe286-4475-4c72-baf3-e667f1112304","type":"Selection"},"selection_policy":{"id":"ac7d291c-3f25-4433-94cc-e52d20994d82","type":"UnionRenderers"}},"id":"4794ea42-fd03-43c7-b6b6-73795b306d22","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"8c12efd0-a072-4cec-92d5-04c8d56879ac","type":"FactorRange"},{"attributes":{},"id":"f923e276-582c-4561-9c5a-da045abf64e8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"543c7722-8be9-45aa-9e1f-e1b10eb628ad","type":"DataRange1d"},{"attributes":{},"id":"68bfe286-4475-4c72-baf3-e667f1112304","type":"Selection"},{"attributes":{},"id":"28c52911-74ae-466d-94a8-92bf5b167394","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"5e53a4a1-3354-4222-b198-54aefa8d95e8","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"5229a395-3625-4698-b29f-724aab4675a4","type":"Title"},{"attributes":{},"id":"ac7d291c-3f25-4433-94cc-e52d20994d82","type":"UnionRenderers"},{"attributes":{"below":[{"id":"b87d5dee-d810-477e-bb4c-716c9a518faa","type":"CategoricalAxis"}],"left":[{"id":"4f2acb57-df0a-4534-9f1d-54973e8ee427","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"b87d5dee-d810-477e-bb4c-716c9a518faa","type":"CategoricalAxis"},{"id":"f8c0289e-eaa3-420f-9d46-e6f04b0a9516","type":"Grid"},{"id":"4f2acb57-df0a-4534-9f1d-54973e8ee427","type":"LinearAxis"},{"id":"2de2d8e7-3d91-4366-9e26-dc46424f7271","type":"Grid"},{"id":"806301f2-0b80-4517-99d1-6aed9368d3d4","type":"GlyphRenderer"}],"title":{"id":"5229a395-3625-4698-b29f-724aab4675a4","type":"Title"},"toolbar":{"id":"a522ceca-86e8-4e8d-960d-24cb7fa75de3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8c12efd0-a072-4cec-92d5-04c8d56879ac","type":"FactorRange"},"x_scale":{"id":"62995863-05f9-45a5-8d5a-3394df18a445","type":"CategoricalScale"},"y_range":{"id":"543c7722-8be9-45aa-9e1f-e1b10eb628ad","type":"DataRange1d"},"y_scale":{"id":"0fa61be1-0d95-462c-a584-d4cc3be8f6c5","type":"LinearScale"}},"id":"cff609a3-8b48-455d-9915-717c1e7eceac","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0fa61be1-0d95-462c-a584-d4cc3be8f6c5","type":"LinearScale"},{"attributes":{"formatter":{"id":"28c52911-74ae-466d-94a8-92bf5b167394","type":"BasicTickFormatter"},"plot":{"id":"cff609a3-8b48-455d-9915-717c1e7eceac","subtype":"Figure","type":"Plot"},"ticker":{"id":"26d9f206-a6d8-4648-85eb-72a97b897198","type":"BasicTicker"}},"id":"4f2acb57-df0a-4534-9f1d-54973e8ee427","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f923e276-582c-4561-9c5a-da045abf64e8","type":"CategoricalTickFormatter"},"plot":{"id":"cff609a3-8b48-455d-9915-717c1e7eceac","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f0f522e-e83f-499e-b972-41fb42a209ae","type":"CategoricalTicker"}},"id":"b87d5dee-d810-477e-bb4c-716c9a518faa","type":"CategoricalAxis"},{"attributes":{},"id":"1f0f522e-e83f-499e-b972-41fb42a209ae","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"4794ea42-fd03-43c7-b6b6-73795b306d22","type":"ColumnDataSource"},"glyph":{"id":"5e53a4a1-3354-4222-b198-54aefa8d95e8","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be43c169-36b3-4d81-bbc8-987308c4a7d0","type":"VBar"},"selection_glyph":null,"view":{"id":"a69ecee4-d2c7-4fe1-b7db-e2aab1a62959","type":"CDSView"}},"id":"806301f2-0b80-4517-99d1-6aed9368d3d4","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"cff609a3-8b48-455d-9915-717c1e7eceac","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f0f522e-e83f-499e-b972-41fb42a209ae","type":"CategoricalTicker"}},"id":"f8c0289e-eaa3-420f-9d46-e6f04b0a9516","type":"Grid"},{"attributes":{"source":{"id":"4794ea42-fd03-43c7-b6b6-73795b306d22","type":"ColumnDataSource"}},"id":"a69ecee4-d2c7-4fe1-b7db-e2aab1a62959","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"a522ceca-86e8-4e8d-960d-24cb7fa75de3","type":"Toolbar"},{"attributes":{},"id":"26d9f206-a6d8-4648-85eb-72a97b897198","type":"BasicTicker"},{"attributes":{},"id":"62995863-05f9-45a5-8d5a-3394df18a445","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"cff609a3-8b48-455d-9915-717c1e7eceac","subtype":"Figure","type":"Plot"},"ticker":{"id":"26d9f206-a6d8-4648-85eb-72a97b897198","type":"BasicTicker"}},"id":"2de2d8e7-3d91-4366-9e26-dc46424f7271","type":"Grid"}],"root_ids":["cff609a3-8b48-455d-9915-717c1e7eceac"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e9794781-7d02-455c-9c43-28f81c355f9a","roots":{"cff609a3-8b48-455d-9915-717c1e7eceac":"e76e27f1-678f-435f-8325-fa38f051b2ea"}}];
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