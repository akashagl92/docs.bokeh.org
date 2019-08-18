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
      };var element = document.getElementById("569811ca-51ef-4975-9274-07905c54a61c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '569811ca-51ef-4975-9274-07905c54a61c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"8f1ad1b4-65f3-4a92-afc9-67f31d9a9465":{"roots":{"references":[{"attributes":{"formatter":{"id":"da56b82d-ce54-4a87-95c1-b85096057d76","type":"CategoricalTickFormatter"},"plot":{"id":"e13f12fd-0f9f-4f33-a178-4d8f7200303e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea89a582-1cce-4937-b45a-ec039611bd29","type":"CategoricalTicker"}},"id":"666f335d-3aac-4694-a910-c3b92b9268e3","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"a0db8c50-1c6f-4cbc-a4c7-313829b23cc3","type":"BasicTickFormatter"},"plot":{"id":"e13f12fd-0f9f-4f33-a178-4d8f7200303e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa35499-b8d1-4acc-b9f5-041780c7b296","type":"BasicTicker"}},"id":"0799012f-04f9-48fd-9112-fed49c4d7033","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"42f9eeca-4900-404a-a772-5fab1e9b46ed","type":"VBar"},{"attributes":{},"id":"ea89a582-1cce-4937-b45a-ec039611bd29","type":"CategoricalTicker"},{"attributes":{},"id":"0fa35499-b8d1-4acc-b9f5-041780c7b296","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e13f12fd-0f9f-4f33-a178-4d8f7200303e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa35499-b8d1-4acc-b9f5-041780c7b296","type":"BasicTicker"}},"id":"067043ab-9d56-40ba-b5b3-a2cf1b7b4509","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d10fbb69-1fb7-451c-af0e-e88bc25f1f84","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"2d3dd66b-9bb4-4e73-8b53-20291ac2a061","type":"DataRange1d"},{"attributes":{},"id":"da56b82d-ce54-4a87-95c1-b85096057d76","type":"CategoricalTickFormatter"},{"attributes":{},"id":"a0db8c50-1c6f-4cbc-a4c7-313829b23cc3","type":"BasicTickFormatter"},{"attributes":{},"id":"9dc754fd-befe-4c97-b90e-1e7ab3e196e1","type":"LinearScale"},{"attributes":{},"id":"7eb6ad13-b325-4e8f-a013-f50d3f71bd1e","type":"CategoricalScale"},{"attributes":{},"id":"21f6a679-d2cf-4dfd-a787-3672c4a0cbfd","type":"Selection"},{"attributes":{"below":[{"id":"666f335d-3aac-4694-a910-c3b92b9268e3","type":"CategoricalAxis"}],"left":[{"id":"0799012f-04f9-48fd-9112-fed49c4d7033","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"666f335d-3aac-4694-a910-c3b92b9268e3","type":"CategoricalAxis"},{"id":"666bc1a2-52ce-4614-a791-c302f951c8ab","type":"Grid"},{"id":"0799012f-04f9-48fd-9112-fed49c4d7033","type":"LinearAxis"},{"id":"067043ab-9d56-40ba-b5b3-a2cf1b7b4509","type":"Grid"},{"id":"83dd34bf-34b8-42b3-a3e0-925bd25a48b5","type":"GlyphRenderer"}],"title":{"id":"59c3e943-d4cd-4b71-9f70-239147dbee86","type":"Title"},"toolbar":{"id":"7618ae39-7fb0-469a-938f-17965bb4d273","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"57dbaff7-9d89-4094-9ee3-55178ea13fd0","type":"FactorRange"},"x_scale":{"id":"7eb6ad13-b325-4e8f-a013-f50d3f71bd1e","type":"CategoricalScale"},"y_range":{"id":"2d3dd66b-9bb4-4e73-8b53-20291ac2a061","type":"DataRange1d"},"y_scale":{"id":"9dc754fd-befe-4c97-b90e-1e7ab3e196e1","type":"LinearScale"}},"id":"e13f12fd-0f9f-4f33-a178-4d8f7200303e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37034bf1-e7fb-4b36-a07d-73e5fd42eddc","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"f4d927a6-b4fd-4b6c-8ddb-a99903eae142","type":"ColumnDataSource"},"glyph":{"id":"d10fbb69-1fb7-451c-af0e-e88bc25f1f84","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42f9eeca-4900-404a-a772-5fab1e9b46ed","type":"VBar"},"selection_glyph":null,"view":{"id":"84993414-7ec8-4e42-8578-08001b975c67","type":"CDSView"}},"id":"83dd34bf-34b8-42b3-a3e0-925bd25a48b5","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21f6a679-d2cf-4dfd-a787-3672c4a0cbfd","type":"Selection"},"selection_policy":{"id":"37034bf1-e7fb-4b36-a07d-73e5fd42eddc","type":"UnionRenderers"}},"id":"f4d927a6-b4fd-4b6c-8ddb-a99903eae142","type":"ColumnDataSource"},{"attributes":{"source":{"id":"f4d927a6-b4fd-4b6c-8ddb-a99903eae142","type":"ColumnDataSource"}},"id":"84993414-7ec8-4e42-8578-08001b975c67","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"59c3e943-d4cd-4b71-9f70-239147dbee86","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e13f12fd-0f9f-4f33-a178-4d8f7200303e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea89a582-1cce-4937-b45a-ec039611bd29","type":"CategoricalTicker"}},"id":"666bc1a2-52ce-4614-a791-c302f951c8ab","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7618ae39-7fb0-469a-938f-17965bb4d273","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"57dbaff7-9d89-4094-9ee3-55178ea13fd0","type":"FactorRange"}],"root_ids":["e13f12fd-0f9f-4f33-a178-4d8f7200303e"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"8f1ad1b4-65f3-4a92-afc9-67f31d9a9465","elementid":"569811ca-51ef-4975-9274-07905c54a61c","modelid":"e13f12fd-0f9f-4f33-a178-4d8f7200303e"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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