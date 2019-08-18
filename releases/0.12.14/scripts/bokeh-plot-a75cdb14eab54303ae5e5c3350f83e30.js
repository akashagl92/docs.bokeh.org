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
      };var element = document.getElementById("4f841046-1771-4fb2-8fd6-be2c764d344b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4f841046-1771-4fb2-8fd6-be2c764d344b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"f5dd6846-e0dd-481f-8cd2-74f280d2d83d":{"roots":{"references":[{"attributes":{"range":{"id":"cee0be56-5c20-4151-aff6-b173e4deb1aa","type":"FactorRange"},"value":-0.25},"id":"a3e485dd-6098-4fd7-a65b-78d71399998f","type":"Dodge"},{"attributes":{},"id":"08b6e05b-5d79-4d72-ba83-8e61eafd108c","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"be9ec3cc-d1e8-4146-a121-748c54c8222b","type":"CategoricalTickFormatter"},"plot":{"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"},"ticker":{"id":"08b6e05b-5d79-4d72-ba83-8e61eafd108c","type":"CategoricalTicker"}},"id":"429afc9b-bb54-40ce-80c7-5489dc48fd36","type":"CategoricalAxis"},{"attributes":{},"id":"e9ab8246-798e-413c-b288-42a9b2afaa33","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"1e92626a-b7aa-42ad-a531-856cd703b772","type":"Range1d"},{"attributes":{"source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"}},"id":"0f33cd0a-2d71-4675-9635-b4e4111227c3","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"},"ticker":{"id":"08b6e05b-5d79-4d72-ba83-8e61eafd108c","type":"CategoricalTicker"}},"id":"dde78768-9a9f-43fb-8f11-26099d8fd2f1","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"53eb5a27-2363-410e-bff1-613c37330b6a","type":"Title"},{"attributes":{"formatter":{"id":"cf6e59f2-2dfb-492e-b597-ea081cfa114f","type":"BasicTickFormatter"},"plot":{"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"},"ticker":{"id":"aca7ef5e-7b4f-47c8-ad4a-dba12df0578e","type":"BasicTicker"}},"id":"3b95f2cb-21ca-4b7d-ae81-b153db1f1168","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"32d99a3f-35a9-41ca-b0e6-317fd46882cf","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"},{"attributes":{},"id":"aca7ef5e-7b4f-47c8-ad4a-dba12df0578e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"},"glyph":{"id":"a96bafaa-fa32-4337-be2c-63833cc133a6","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb182db0-75ea-45f6-9b6f-fbad56a1e113","type":"VBar"},"selection_glyph":null,"view":{"id":"0f33cd0a-2d71-4675-9635-b4e4111227c3","type":"CDSView"}},"id":"6542d84b-8e34-4149-833f-e0476f9ce17a","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"},"ticker":{"id":"aca7ef5e-7b4f-47c8-ad4a-dba12df0578e","type":"BasicTicker"}},"id":"dddfb31b-3293-4940-abf0-161601a482fd","type":"Grid"},{"attributes":{"items":[{"id":"9b11f083-6929-4bc3-8379-48cfe14b0970","type":"LegendItem"},{"id":"334965a8-601f-4073-9dca-c91749d56133","type":"LegendItem"},{"id":"ae0bc1fd-b84b-41d1-8578-63f6bbf2647b","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"}},"id":"43d0c76c-1a23-4b20-9a58-4db14ac298b2","type":"Legend"},{"attributes":{},"id":"bf3cd49b-9f4c-4c0f-9d6f-e1f3b95ba939","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a3e485dd-6098-4fd7-a65b-78d71399998f","type":"Dodge"}}},"id":"f1bec935-da5c-4a3b-879c-3c6c6ed2a2f0","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a3e485dd-6098-4fd7-a65b-78d71399998f","type":"Dodge"}}},"id":"70000b87-36b4-44db-973c-36b3bb56df44","type":"VBar"},{"attributes":{"below":[{"id":"429afc9b-bb54-40ce-80c7-5489dc48fd36","type":"CategoricalAxis"}],"left":[{"id":"3b95f2cb-21ca-4b7d-ae81-b153db1f1168","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"429afc9b-bb54-40ce-80c7-5489dc48fd36","type":"CategoricalAxis"},{"id":"dde78768-9a9f-43fb-8f11-26099d8fd2f1","type":"Grid"},{"id":"3b95f2cb-21ca-4b7d-ae81-b153db1f1168","type":"LinearAxis"},{"id":"dddfb31b-3293-4940-abf0-161601a482fd","type":"Grid"},{"id":"43d0c76c-1a23-4b20-9a58-4db14ac298b2","type":"Legend"},{"id":"3012f8a9-b290-47ab-99ce-25443af532e1","type":"GlyphRenderer"},{"id":"9ed6d1b0-c255-4927-8fda-098c6f779340","type":"GlyphRenderer"},{"id":"6542d84b-8e34-4149-833f-e0476f9ce17a","type":"GlyphRenderer"}],"title":{"id":"53eb5a27-2363-410e-bff1-613c37330b6a","type":"Title"},"toolbar":{"id":"32d99a3f-35a9-41ca-b0e6-317fd46882cf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cee0be56-5c20-4151-aff6-b173e4deb1aa","type":"FactorRange"},"x_scale":{"id":"bf3cd49b-9f4c-4c0f-9d6f-e1f3b95ba939","type":"CategoricalScale"},"y_range":{"id":"1e92626a-b7aa-42ad-a531-856cd703b772","type":"Range1d"},"y_scale":{"id":"e9ab8246-798e-413c-b288-42a9b2afaa33","type":"LinearScale"}},"id":"e1e6b073-8baf-4159-96c7-3eb84e75c842","subtype":"Figure","type":"Plot"},{"attributes":{"range":{"id":"cee0be56-5c20-4151-aff6-b173e4deb1aa","type":"FactorRange"},"value":0.25},"id":"c57c437e-b489-493d-b46d-5315e13f57a1","type":"Dodge"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"6542d84b-8e34-4149-833f-e0476f9ce17a","type":"GlyphRenderer"}]},"id":"ae0bc1fd-b84b-41d1-8578-63f6bbf2647b","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"c57c437e-b489-493d-b46d-5315e13f57a1","type":"Dodge"}}},"id":"eb182db0-75ea-45f6-9b6f-fbad56a1e113","type":"VBar"},{"attributes":{"data_source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"},"glyph":{"id":"f1bec935-da5c-4a3b-879c-3c6c6ed2a2f0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70000b87-36b4-44db-973c-36b3bb56df44","type":"VBar"},"selection_glyph":null,"view":{"id":"139aa106-6cdd-4e4f-a4f7-f53a4d58b248","type":"CDSView"}},"id":"3012f8a9-b290-47ab-99ce-25443af532e1","type":"GlyphRenderer"},{"attributes":{},"id":"be9ec3cc-d1e8-4146-a121-748c54c8222b","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"}},"id":"139aa106-6cdd-4e4f-a4f7-f53a4d58b248","type":"CDSView"},{"attributes":{},"id":"cf6e59f2-2dfb-492e-b597-ea081cfa114f","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"3012f8a9-b290-47ab-99ce-25443af532e1","type":"GlyphRenderer"}]},"id":"9b11f083-6929-4bc3-8379-48cfe14b0970","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a176a0dc-cd5d-4fa7-8fdd-b85513c8f050","type":"Dodge"}}},"id":"9d25213b-a722-4e9e-8dd3-c187e7492b4f","type":"VBar"},{"attributes":{"range":{"id":"cee0be56-5c20-4151-aff6-b173e4deb1aa","type":"FactorRange"}},"id":"a176a0dc-cd5d-4fa7-8fdd-b85513c8f050","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"c57c437e-b489-493d-b46d-5315e13f57a1","type":"Dodge"}}},"id":"a96bafaa-fa32-4337-be2c-63833cc133a6","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"cee0be56-5c20-4151-aff6-b173e4deb1aa","type":"FactorRange"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"9ed6d1b0-c255-4927-8fda-098c6f779340","type":"GlyphRenderer"}]},"id":"334965a8-601f-4073-9dca-c91749d56133","type":"LegendItem"},{"attributes":{"source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"}},"id":"eef3d7d4-9a5d-40bb-8f16-64c82f47eb18","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a176a0dc-cd5d-4fa7-8fdd-b85513c8f050","type":"Dodge"}}},"id":"a8def8c2-61ce-4b87-8d16-eac03abecd3b","type":"VBar"},{"attributes":{"data_source":{"id":"63043d95-e492-4151-86c7-341f46a51faf","type":"ColumnDataSource"},"glyph":{"id":"9d25213b-a722-4e9e-8dd3-c187e7492b4f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8def8c2-61ce-4b87-8d16-eac03abecd3b","type":"VBar"},"selection_glyph":null,"view":{"id":"eef3d7d4-9a5d-40bb-8f16-64c82f47eb18","type":"CDSView"}},"id":"9ed6d1b0-c255-4927-8fda-098c6f779340","type":"GlyphRenderer"}],"root_ids":["e1e6b073-8baf-4159-96c7-3eb84e75c842"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"f5dd6846-e0dd-481f-8cd2-74f280d2d83d","elementid":"4f841046-1771-4fb2-8fd6-be2c764d344b","modelid":"e1e6b073-8baf-4159-96c7-3eb84e75c842"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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