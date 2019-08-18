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
      };var element = document.getElementById("6f9c562b-2638-4e23-9446-4036be8268f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f9c562b-2638-4e23-9446-4036be8268f1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4822705f-e1d8-4bda-ac83-83731514fc14":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1362f8d5-4f5c-4403-9bf9-bd27954d9942","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b651d5ce-fb5b-48e2-8559-b870cfd6b706","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd37b9bb-530a-4c57-8f01-fd10b39234ea","type":"CategoricalTicker"}},"id":"6e4cfdea-aefb-4132-af65-c3d513a467e6","type":"Grid"},{"attributes":{"below":[{"id":"c81dd90c-7b69-406d-ab01-3701d277c368","type":"CategoricalAxis"}],"left":[{"id":"28161cb3-76ae-45bf-8a97-91f76b940c59","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"c81dd90c-7b69-406d-ab01-3701d277c368","type":"CategoricalAxis"},{"id":"6e4cfdea-aefb-4132-af65-c3d513a467e6","type":"Grid"},{"id":"28161cb3-76ae-45bf-8a97-91f76b940c59","type":"LinearAxis"},{"id":"af121143-7849-4ab5-8955-c49ba52c76c5","type":"Grid"},{"id":"87e427bc-a53b-4f7b-a297-04f1c37d62e5","type":"GlyphRenderer"}],"title":{"id":"75b6a22d-a7d8-438e-be74-53cdc93ed4a9","type":"Title"},"toolbar":{"id":"a4b18d51-a78d-4d07-825d-b1d82222b271","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3f56f495-4cef-490c-b4ec-acdfcc112ffd","type":"FactorRange"},"x_scale":{"id":"bae5ac3b-9ffd-41fd-bc45-9454cd23332b","type":"CategoricalScale"},"y_range":{"id":"1ad79c9c-f907-4aa2-8341-aea9badaf6b5","type":"DataRange1d"},"y_scale":{"id":"637c3a02-7c80-40c3-b2ba-e5b0e73521a1","type":"LinearScale"}},"id":"b651d5ce-fb5b-48e2-8559-b870cfd6b706","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8387ad0a-3f47-4120-9b9e-3a4e6214ce44","type":"BasicTicker"},{"attributes":{"formatter":{"id":"962a640c-cdd2-43a4-84d6-2c950186646d","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"b651d5ce-fb5b-48e2-8559-b870cfd6b706","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd37b9bb-530a-4c57-8f01-fd10b39234ea","type":"CategoricalTicker"}},"id":"c81dd90c-7b69-406d-ab01-3701d277c368","type":"CategoricalAxis"},{"attributes":{"source":{"id":"444e7878-748a-46de-b12d-b92b41df5cdf","type":"ColumnDataSource"}},"id":"b2e4ea42-af96-4013-a8e6-7855c3b75f02","type":"CDSView"},{"attributes":{},"id":"962a640c-cdd2-43a4-84d6-2c950186646d","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"1ad79c9c-f907-4aa2-8341-aea9badaf6b5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"444e7878-748a-46de-b12d-b92b41df5cdf","type":"ColumnDataSource"},"glyph":{"id":"1362f8d5-4f5c-4403-9bf9-bd27954d9942","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d3886e9b-627c-43c7-941d-7d8a55127232","type":"VBar"},"selection_glyph":null,"view":{"id":"b2e4ea42-af96-4013-a8e6-7855c3b75f02","type":"CDSView"}},"id":"87e427bc-a53b-4f7b-a297-04f1c37d62e5","type":"GlyphRenderer"},{"attributes":{},"id":"df0a35a9-259c-42f5-9690-0fc99330cdcd","type":"UnionRenderers"},{"attributes":{},"id":"bae5ac3b-9ffd-41fd-bc45-9454cd23332b","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"b651d5ce-fb5b-48e2-8559-b870cfd6b706","subtype":"Figure","type":"Plot"},"ticker":{"id":"8387ad0a-3f47-4120-9b9e-3a4e6214ce44","type":"BasicTicker"}},"id":"af121143-7849-4ab5-8955-c49ba52c76c5","type":"Grid"},{"attributes":{},"id":"a2562a2c-6183-4c95-a7ac-f1c5536cafb8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"3f56f495-4cef-490c-b4ec-acdfcc112ffd","type":"FactorRange"},{"attributes":{},"id":"637c3a02-7c80-40c3-b2ba-e5b0e73521a1","type":"LinearScale"},{"attributes":{},"id":"dd37b9bb-530a-4c57-8f01-fd10b39234ea","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"75b6a22d-a7d8-438e-be74-53cdc93ed4a9","type":"Title"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"1eef5b72-786f-4503-8261-9b9574c7ad33","type":"Selection"},"selection_policy":{"id":"df0a35a9-259c-42f5-9690-0fc99330cdcd","type":"UnionRenderers"}},"id":"444e7878-748a-46de-b12d-b92b41df5cdf","type":"ColumnDataSource"},{"attributes":{},"id":"1eef5b72-786f-4503-8261-9b9574c7ad33","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"a4b18d51-a78d-4d07-825d-b1d82222b271","type":"Toolbar"},{"attributes":{"formatter":{"id":"a2562a2c-6183-4c95-a7ac-f1c5536cafb8","type":"BasicTickFormatter"},"plot":{"id":"b651d5ce-fb5b-48e2-8559-b870cfd6b706","subtype":"Figure","type":"Plot"},"ticker":{"id":"8387ad0a-3f47-4120-9b9e-3a4e6214ce44","type":"BasicTicker"}},"id":"28161cb3-76ae-45bf-8a97-91f76b940c59","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d3886e9b-627c-43c7-941d-7d8a55127232","type":"VBar"}],"root_ids":["b651d5ce-fb5b-48e2-8559-b870cfd6b706"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4822705f-e1d8-4bda-ac83-83731514fc14","roots":{"b651d5ce-fb5b-48e2-8559-b870cfd6b706":"6f9c562b-2638-4e23-9446-4036be8268f1"}}];
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