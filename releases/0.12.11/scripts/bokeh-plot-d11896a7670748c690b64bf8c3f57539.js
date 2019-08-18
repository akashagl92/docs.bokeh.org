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
      };var element = document.getElementById("e38f371e-e491-499a-a2e6-c9e655a45380");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e38f371e-e491-499a-a2e6-c9e655a45380' but no matching script tag was found. ")
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
                    var docs_json = '{"be089af9-f1cb-445a-9760-5de898f1441f":{"roots":{"references":[{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"4ccc23db-e75d-4bab-a195-f824b5308f63","type":"GlyphRenderer"}]},"id":"358c0200-0839-41aa-b91c-11bc1b9d7235","type":"LegendItem"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"5e10e41f-065f-47e6-9ffc-2d9c5a6f76c2","type":"FactorRange"},{"attributes":{"formatter":{"id":"b73c1adb-6e14-4090-bae0-51103be14347","type":"CategoricalTickFormatter"},"plot":{"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"},"ticker":{"id":"6249eb63-c9f3-4285-8ae0-7384d7d9308e","type":"CategoricalTicker"}},"id":"f1a2fdb0-aede-4314-9565-6eea0ef2ddfd","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"848422a4-f84d-447d-a6d3-2cffa822a52f","type":"Dodge"}}},"id":"89e30bdc-0620-4b82-a9a7-a1489bc01be9","type":"VBar"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d680fa4f-971e-4305-a6b2-4df05203664f","type":"Dodge"}}},"id":"943784f3-3149-44cc-87fd-e60d1a47ff67","type":"VBar"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"848422a4-f84d-447d-a6d3-2cffa822a52f","type":"Dodge"}}},"id":"8167b0e4-1346-4a9f-8749-c070f65b05b4","type":"VBar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d56c4b51-3ea4-4106-9851-960bfd0052b4","type":"Dodge"}}},"id":"434cfe71-f09b-4450-a65a-1600a182ed39","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d680fa4f-971e-4305-a6b2-4df05203664f","type":"Dodge"}}},"id":"9bd4b4b0-18e0-47a5-9946-36b9acb0386c","type":"VBar"},{"attributes":{"range":{"id":"5e10e41f-065f-47e6-9ffc-2d9c5a6f76c2","type":"FactorRange"},"value":0.25},"id":"d56c4b51-3ea4-4106-9851-960bfd0052b4","type":"Dodge"},{"attributes":{"data_source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"},"glyph":{"id":"943784f3-3149-44cc-87fd-e60d1a47ff67","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9bd4b4b0-18e0-47a5-9946-36b9acb0386c","type":"VBar"},"selection_glyph":null,"view":{"id":"ffbc9670-aad6-4d95-8c76-5d5e27d5dd97","type":"CDSView"}},"id":"1eed67d1-69de-43d3-b577-83dff51df4c4","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"358c0200-0839-41aa-b91c-11bc1b9d7235","type":"LegendItem"},{"id":"e807ac40-0e62-4465-8b08-174ebce3fad0","type":"LegendItem"},{"id":"93f3b2f6-c4d6-40ca-91bc-9367aaad25ff","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"}},"id":"ca47dbef-2714-454b-b627-b19ff59cbaa0","type":"Legend"},{"attributes":{"source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"}},"id":"ffbc9670-aad6-4d95-8c76-5d5e27d5dd97","type":"CDSView"},{"attributes":{"range":{"id":"5e10e41f-065f-47e6-9ffc-2d9c5a6f76c2","type":"FactorRange"},"value":-0.25},"id":"848422a4-f84d-447d-a6d3-2cffa822a52f","type":"Dodge"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1eed67d1-69de-43d3-b577-83dff51df4c4","type":"GlyphRenderer"}]},"id":"e807ac40-0e62-4465-8b08-174ebce3fad0","type":"LegendItem"},{"attributes":{},"id":"7a90f74d-725e-4fe5-9605-a8dc16ba209d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ccbc83c8-d300-40ee-8277-1e6515968600","type":"BasicTickFormatter"},"plot":{"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a90f74d-725e-4fe5-9605-a8dc16ba209d","type":"BasicTicker"}},"id":"8b674fea-b7e2-420d-ac82-1783ddc10407","type":"LinearAxis"},{"attributes":{"source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"}},"id":"c5819f59-c611-4aff-884b-355bcc5af862","type":"CDSView"},{"attributes":{"data_source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"},"glyph":{"id":"8167b0e4-1346-4a9f-8749-c070f65b05b4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89e30bdc-0620-4b82-a9a7-a1489bc01be9","type":"VBar"},"selection_glyph":null,"view":{"id":"6193b752-62b2-49e7-b128-c618be47cc2b","type":"CDSView"}},"id":"4ccc23db-e75d-4bab-a195-f824b5308f63","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"d56c4b51-3ea4-4106-9851-960bfd0052b4","type":"Dodge"}}},"id":"dbb98017-a0ab-4a43-99a3-fbd8b1d7bb90","type":"VBar"},{"attributes":{},"id":"b73c1adb-6e14-4090-bae0-51103be14347","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"},"glyph":{"id":"434cfe71-f09b-4450-a65a-1600a182ed39","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dbb98017-a0ab-4a43-99a3-fbd8b1d7bb90","type":"VBar"},"selection_glyph":null,"view":{"id":"c5819f59-c611-4aff-884b-355bcc5af862","type":"CDSView"}},"id":"b8a10803-12bc-4447-a063-f2c4d41736b9","type":"GlyphRenderer"},{"attributes":{},"id":"ccbc83c8-d300-40ee-8277-1e6515968600","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"b8a10803-12bc-4447-a063-f2c4d41736b9","type":"GlyphRenderer"}]},"id":"93f3b2f6-c4d6-40ca-91bc-9367aaad25ff","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a90f74d-725e-4fe5-9605-a8dc16ba209d","type":"BasicTicker"}},"id":"a46ece70-d8e0-446a-bdf6-b9ec92a29cfd","type":"Grid"},{"attributes":{"below":[{"id":"f1a2fdb0-aede-4314-9565-6eea0ef2ddfd","type":"CategoricalAxis"}],"left":[{"id":"8b674fea-b7e2-420d-ac82-1783ddc10407","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"f1a2fdb0-aede-4314-9565-6eea0ef2ddfd","type":"CategoricalAxis"},{"id":"d56f5dfe-b8ce-4dff-a6ec-b4e93b092515","type":"Grid"},{"id":"8b674fea-b7e2-420d-ac82-1783ddc10407","type":"LinearAxis"},{"id":"a46ece70-d8e0-446a-bdf6-b9ec92a29cfd","type":"Grid"},{"id":"ca47dbef-2714-454b-b627-b19ff59cbaa0","type":"Legend"},{"id":"4ccc23db-e75d-4bab-a195-f824b5308f63","type":"GlyphRenderer"},{"id":"1eed67d1-69de-43d3-b577-83dff51df4c4","type":"GlyphRenderer"},{"id":"b8a10803-12bc-4447-a063-f2c4d41736b9","type":"GlyphRenderer"}],"title":{"id":"493cd9cb-cc1c-4917-9a15-eb91da4d18c1","type":"Title"},"toolbar":{"id":"44836fbd-322f-4b80-9b6e-7b5445989dc4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5e10e41f-065f-47e6-9ffc-2d9c5a6f76c2","type":"FactorRange"},"x_scale":{"id":"d8d8b646-cc9f-49b8-afde-f36f1b764526","type":"CategoricalScale"},"y_range":{"id":"a7793536-e68b-4dbc-966e-cc169283939f","type":"Range1d"},"y_scale":{"id":"92441768-1d97-477a-a8d1-4f6cb9c43d09","type":"LinearScale"}},"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"493cd9cb-cc1c-4917-9a15-eb91da4d18c1","type":"Title"},{"attributes":{},"id":"d8d8b646-cc9f-49b8-afde-f36f1b764526","type":"CategoricalScale"},{"attributes":{},"id":"92441768-1d97-477a-a8d1-4f6cb9c43d09","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"44836fbd-322f-4b80-9b6e-7b5445989dc4","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"a7793536-e68b-4dbc-966e-cc169283939f","type":"Range1d"},{"attributes":{"source":{"id":"ad88ab87-a294-4f1b-9102-5481743160fd","type":"ColumnDataSource"}},"id":"6193b752-62b2-49e7-b128-c618be47cc2b","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"33389dd3-051c-410a-9395-d182f7e06025","subtype":"Figure","type":"Plot"},"ticker":{"id":"6249eb63-c9f3-4285-8ae0-7384d7d9308e","type":"CategoricalTicker"}},"id":"d56f5dfe-b8ce-4dff-a6ec-b4e93b092515","type":"Grid"},{"attributes":{},"id":"6249eb63-c9f3-4285-8ae0-7384d7d9308e","type":"CategoricalTicker"},{"attributes":{"range":{"id":"5e10e41f-065f-47e6-9ffc-2d9c5a6f76c2","type":"FactorRange"}},"id":"d680fa4f-971e-4305-a6b2-4df05203664f","type":"Dodge"}],"root_ids":["33389dd3-051c-410a-9395-d182f7e06025"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"be089af9-f1cb-445a-9760-5de898f1441f","elementid":"e38f371e-e491-499a-a2e6-c9e655a45380","modelid":"33389dd3-051c-410a-9395-d182f7e06025"}];
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