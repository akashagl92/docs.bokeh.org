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
      };var element = document.getElementById("ffbfd7cb-cd00-4e12-b491-9c89cade3f41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffbfd7cb-cd00-4e12-b491-9c89cade3f41' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5ebd70fa-818c-4710-afb8-d0a710d43f09":{"roots":{"references":[{"attributes":{},"id":"2c4219a0-6b00-480b-8f38-6debe19799a6","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"}},"id":"952d5c3c-031a-428f-9f42-991eda6e4af8","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0240639-8ae2-493a-b8a2-2a3cc2a0ccd9","type":"BasicTicker"}},"id":"ba412717-ceaf-4591-8a9e-2353e877c0b9","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"48c12554-670a-4837-88ea-5930ce705bcf","type":"GlyphRenderer"}]},"id":"23cb4036-ff48-4a04-901d-18630c1d5c8b","type":"LegendItem"},{"attributes":{},"id":"f0240639-8ae2-493a-b8a2-2a3cc2a0ccd9","type":"BasicTicker"},{"attributes":{"items":[{"id":"830f56f7-932c-4522-8702-e7d29909e2fc","type":"LegendItem"},{"id":"db170c9c-3519-42f6-8e49-3b7b0156ce0c","type":"LegendItem"},{"id":"23cb4036-ff48-4a04-901d-18630c1d5c8b","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"}},"id":"4ecd2b27-ebda-49ec-93ad-44e230f12fc8","type":"Legend"},{"attributes":{},"id":"bb4d1d23-d88e-46e2-8bb1-05b8a35224bc","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"48332c86-daa9-4b83-846c-9fdb96bfe99b","type":"Dodge"}}},"id":"934cd165-07d7-4b9e-bf5f-a4c34e5951de","type":"VBar"},{"attributes":{"source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"}},"id":"e7866cee-6207-42e7-bd71-03e857bfab14","type":"CDSView"},{"attributes":{"formatter":{"id":"1d8356bc-b145-471e-8bda-515523afa7fb","type":"CategoricalTickFormatter"},"plot":{"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"},"ticker":{"id":"44c436c7-4bea-4c17-b1fd-251b5138bd47","type":"CategoricalTicker"}},"id":"7f1cff7d-1996-4ff6-956c-3fffb16b8105","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"},"glyph":{"id":"121351ae-b649-4a61-82fc-3f8125541d3f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43cf0f9c-b866-47cb-8f9d-829214bc6a4d","type":"VBar"},"selection_glyph":null,"view":{"id":"e7866cee-6207-42e7-bd71-03e857bfab14","type":"CDSView"}},"id":"f6f87fe3-4321-4ef8-9f20-87ceaa033a66","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"},"glyph":{"id":"6e070d99-1064-4d3b-ac66-0f11ffa244ea","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"934cd165-07d7-4b9e-bf5f-a4c34e5951de","type":"VBar"},"selection_glyph":null,"view":{"id":"6c4753b6-77bb-4042-9404-098a210d3379","type":"CDSView"}},"id":"02d5b5d5-3f94-4dfb-b817-92e260c67c25","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"32793702-8d4e-4f1f-9ee0-972c050ab71d","type":"Dodge"}}},"id":"8ec7dbe8-3f31-45dd-8355-b304eda68bc1","type":"VBar"},{"attributes":{},"id":"44c436c7-4bea-4c17-b1fd-251b5138bd47","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"48332c86-daa9-4b83-846c-9fdb96bfe99b","type":"Dodge"}}},"id":"6e070d99-1064-4d3b-ac66-0f11ffa244ea","type":"VBar"},{"attributes":{"range":{"id":"5632567e-9ca6-4ff4-8ade-19328c327091","type":"FactorRange"}},"id":"f6752a8a-297e-43a8-a54b-24907d02357b","type":"Dodge"},{"attributes":{"data_source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"},"glyph":{"id":"7ec14514-dfb2-4f51-ba39-a2ef979d8ec3","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ec7dbe8-3f31-45dd-8355-b304eda68bc1","type":"VBar"},"selection_glyph":null,"view":{"id":"952d5c3c-031a-428f-9f42-991eda6e4af8","type":"CDSView"}},"id":"48c12554-670a-4837-88ea-5930ce705bcf","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7f1cff7d-1996-4ff6-956c-3fffb16b8105","type":"CategoricalAxis"}],"left":[{"id":"8eececf0-935b-4eaf-845c-35e8d37f04c6","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"7f1cff7d-1996-4ff6-956c-3fffb16b8105","type":"CategoricalAxis"},{"id":"af82cf2a-9d19-4bb2-b6ee-334b1ddc0003","type":"Grid"},{"id":"8eececf0-935b-4eaf-845c-35e8d37f04c6","type":"LinearAxis"},{"id":"ba412717-ceaf-4591-8a9e-2353e877c0b9","type":"Grid"},{"id":"4ecd2b27-ebda-49ec-93ad-44e230f12fc8","type":"Legend"},{"id":"02d5b5d5-3f94-4dfb-b817-92e260c67c25","type":"GlyphRenderer"},{"id":"f6f87fe3-4321-4ef8-9f20-87ceaa033a66","type":"GlyphRenderer"},{"id":"48c12554-670a-4837-88ea-5930ce705bcf","type":"GlyphRenderer"}],"title":{"id":"872d0636-d3f9-446c-bae7-8f1dd1c4b584","type":"Title"},"toolbar":{"id":"ae53d683-2d4b-47f0-ab04-28b6d9a43ef6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5632567e-9ca6-4ff4-8ade-19328c327091","type":"FactorRange"},"x_scale":{"id":"231d3fd5-e0b4-4bda-98c5-b83a1d72e36d","type":"CategoricalScale"},"y_range":{"id":"336aeee2-5946-4ee4-9236-28889f0f72c3","type":"Range1d"},"y_scale":{"id":"bb4d1d23-d88e-46e2-8bb1-05b8a35224bc","type":"LinearScale"}},"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1d8356bc-b145-471e-8bda-515523afa7fb","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"}},"id":"6c4753b6-77bb-4042-9404-098a210d3379","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"872d0636-d3f9-446c-bae7-8f1dd1c4b584","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"5632567e-9ca6-4ff4-8ade-19328c327091","type":"FactorRange"},{"attributes":{"range":{"id":"5632567e-9ca6-4ff4-8ade-19328c327091","type":"FactorRange"},"value":-0.25},"id":"48332c86-daa9-4b83-846c-9fdb96bfe99b","type":"Dodge"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"},"ticker":{"id":"44c436c7-4bea-4c17-b1fd-251b5138bd47","type":"CategoricalTicker"}},"id":"af82cf2a-9d19-4bb2-b6ee-334b1ddc0003","type":"Grid"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"f6f87fe3-4321-4ef8-9f20-87ceaa033a66","type":"GlyphRenderer"}]},"id":"db170c9c-3519-42f6-8e49-3b7b0156ce0c","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"a333f842-f9d4-4c8d-ac86-5525e359aea3","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2c4219a0-6b00-480b-8f38-6debe19799a6","type":"BasicTickFormatter"},"plot":{"id":"7712d75a-51ef-4426-b47d-8e79bcb29b78","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0240639-8ae2-493a-b8a2-2a3cc2a0ccd9","type":"BasicTicker"}},"id":"8eececf0-935b-4eaf-845c-35e8d37f04c6","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"336aeee2-5946-4ee4-9236-28889f0f72c3","type":"Range1d"},{"attributes":{},"id":"231d3fd5-e0b4-4bda-98c5-b83a1d72e36d","type":"CategoricalScale"},{"attributes":{"range":{"id":"5632567e-9ca6-4ff4-8ade-19328c327091","type":"FactorRange"},"value":0.25},"id":"32793702-8d4e-4f1f-9ee0-972c050ab71d","type":"Dodge"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ae53d683-2d4b-47f0-ab04-28b6d9a43ef6","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"f6752a8a-297e-43a8-a54b-24907d02357b","type":"Dodge"}}},"id":"121351ae-b649-4a61-82fc-3f8125541d3f","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"f6752a8a-297e-43a8-a54b-24907d02357b","type":"Dodge"}}},"id":"43cf0f9c-b866-47cb-8f9d-829214bc6a4d","type":"VBar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"32793702-8d4e-4f1f-9ee0-972c050ab71d","type":"Dodge"}}},"id":"7ec14514-dfb2-4f51-ba39-a2ef979d8ec3","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"02d5b5d5-3f94-4dfb-b817-92e260c67c25","type":"GlyphRenderer"}]},"id":"830f56f7-932c-4522-8702-e7d29909e2fc","type":"LegendItem"}],"root_ids":["7712d75a-51ef-4426-b47d-8e79bcb29b78"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"5ebd70fa-818c-4710-afb8-d0a710d43f09","elementid":"ffbfd7cb-cd00-4e12-b491-9c89cade3f41","modelid":"7712d75a-51ef-4426-b47d-8e79bcb29b78"}];
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