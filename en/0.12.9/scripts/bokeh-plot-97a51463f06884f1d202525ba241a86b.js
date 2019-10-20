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
      };var element = document.getElementById("89fe59f9-e72f-433b-bb78-4e2ee11e3924");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89fe59f9-e72f-433b-bb78-4e2ee11e3924' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"feebdce9-3272-412c-99ea-7a2f0e5909a6":{"roots":{"references":[{"attributes":{},"id":"7c3d895f-239b-4f2d-a765-624e3ae1b018","type":"CategoricalTicker"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"eb47cbb4-0d5b-492e-919d-12b0186dcee2","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"f76643ac-40a3-4d91-9ff6-9c950014827f","type":"FactorRange"},{"attributes":{},"id":"bc1de73a-d6df-4df0-9f64-ad9b5bd44acd","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"5dd15ef1-fec8-4964-adcc-127107385556","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc1de73a-d6df-4df0-9f64-ad9b5bd44acd","type":"BasicTicker"}},"id":"96eb1468-82d5-46fc-9135-da9e5a0f84c7","type":"Grid"},{"attributes":{"below":[{"id":"ee280510-e3d1-4e71-ab18-23833f430036","type":"CategoricalAxis"}],"left":[{"id":"e4f9dbe1-ef60-4695-a954-6171599f2ee2","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"ee280510-e3d1-4e71-ab18-23833f430036","type":"CategoricalAxis"},{"id":"9a09805d-a9c6-4673-9e6a-097f151ffa2d","type":"Grid"},{"id":"e4f9dbe1-ef60-4695-a954-6171599f2ee2","type":"LinearAxis"},{"id":"96eb1468-82d5-46fc-9135-da9e5a0f84c7","type":"Grid"},{"id":"5189bcc7-09c3-4543-a23b-47da41d451c2","type":"GlyphRenderer"}],"title":{"id":"c1f78c41-f666-491d-b7cc-adca3563bebe","type":"Title"},"toolbar":{"id":"5619fdf8-6d6d-49b0-859f-96aa441d51a8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f76643ac-40a3-4d91-9ff6-9c950014827f","type":"FactorRange"},"x_scale":{"id":"a511f0cf-1166-484b-ac61-98fb364a77c3","type":"CategoricalScale"},"y_range":{"id":"584a707a-8fde-4efc-b5fc-400006eb7368","type":"DataRange1d"},"y_scale":{"id":"6719cb92-2e3e-478a-bcea-dadbeb5bb39a","type":"LinearScale"}},"id":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"c1f78c41-f666-491d-b7cc-adca3563bebe","type":"Title"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"eb47cbb4-0d5b-492e-919d-12b0186dcee2","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"a7049565-0f5c-4aaa-b77c-8eb6e302d9ac","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5619fdf8-6d6d-49b0-859f-96aa441d51a8","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"39c2784b-4966-42e6-bc77-d52e395eb0bb","type":"VBar"},{"attributes":{"source":{"id":"5dd15ef1-fec8-4964-adcc-127107385556","type":"ColumnDataSource"}},"id":"d2ae47ba-6b8f-4856-ad66-ff03d3f1584a","type":"CDSView"},{"attributes":{"data_source":{"id":"5dd15ef1-fec8-4964-adcc-127107385556","type":"ColumnDataSource"},"glyph":{"id":"a7049565-0f5c-4aaa-b77c-8eb6e302d9ac","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39c2784b-4966-42e6-bc77-d52e395eb0bb","type":"VBar"},"selection_glyph":null,"view":{"id":"d2ae47ba-6b8f-4856-ad66-ff03d3f1584a","type":"CDSView"}},"id":"5189bcc7-09c3-4543-a23b-47da41d451c2","type":"GlyphRenderer"},{"attributes":{},"id":"5e4fbf3d-ad9b-4e5a-8fad-42f4bdb27773","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"584a707a-8fde-4efc-b5fc-400006eb7368","type":"DataRange1d"},{"attributes":{},"id":"eda57b5e-1ba9-4ecc-8846-c1725e3960c5","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"5e4fbf3d-ad9b-4e5a-8fad-42f4bdb27773","type":"BasicTickFormatter"},"plot":{"id":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc1de73a-d6df-4df0-9f64-ad9b5bd44acd","type":"BasicTicker"}},"id":"e4f9dbe1-ef60-4695-a954-6171599f2ee2","type":"LinearAxis"},{"attributes":{},"id":"6719cb92-2e3e-478a-bcea-dadbeb5bb39a","type":"LinearScale"},{"attributes":{},"id":"a511f0cf-1166-484b-ac61-98fb364a77c3","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3d895f-239b-4f2d-a765-624e3ae1b018","type":"CategoricalTicker"}},"id":"9a09805d-a9c6-4673-9e6a-097f151ffa2d","type":"Grid"},{"attributes":{"formatter":{"id":"eda57b5e-1ba9-4ecc-8846-c1725e3960c5","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7c3d895f-239b-4f2d-a765-624e3ae1b018","type":"CategoricalTicker"}},"id":"ee280510-e3d1-4e71-ab18-23833f430036","type":"CategoricalAxis"}],"root_ids":["0410d8cc-25b5-4b13-8b32-f8ebde38df8e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"feebdce9-3272-412c-99ea-7a2f0e5909a6","elementid":"89fe59f9-e72f-433b-bb78-4e2ee11e3924","modelid":"0410d8cc-25b5-4b13-8b32-f8ebde38df8e"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
