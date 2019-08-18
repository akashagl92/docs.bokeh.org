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
      };var element = document.getElementById("2f69183e-68c3-46bc-97cc-c748ea823b1d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f69183e-68c3-46bc-97cc-c748ea823b1d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dbc73b51-fbf6-4bfb-b926-d2cbef57166b":{"roots":{"references":[{"attributes":{},"id":"132bb33f-42d7-4f2e-8915-c5397eeea9bd","type":"LinearScale"},{"attributes":{},"id":"6521d5a1-043b-451a-aa22-212b8dfc0eb4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":[{"id":"53fe8616-5af0-4f3b-9619-81bb6fb84219","type":"GlyphRenderer"}],"tooltips":[["2015 total","@2015"],["index","$index"]]},"id":"fe478521-1eb4-42be-b7e6-021dfd60ec63","type":"HoverTool"},{"attributes":{"items":[{"id":"142546c2-2f71-4400-9b1b-d06e202882a3","type":"LegendItem"},{"id":"02f9bcba-2924-46c8-a04c-a852e056c310","type":"LegendItem"},{"id":"9602ecd1-ef4d-451f-a122-68b845998048","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"}},"id":"c2b634a2-1f4d-46a7-89e2-ebce1a4fe02b","type":"Legend"},{"attributes":{"below":[{"id":"36541d78-5f3f-4743-81cc-91f7b3f976dc","type":"CategoricalAxis"}],"left":[{"id":"2527d89c-9371-4ec2-82c6-f1363757367a","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"36541d78-5f3f-4743-81cc-91f7b3f976dc","type":"CategoricalAxis"},{"id":"971429f0-bb3e-43d8-a42c-dc9cdfab68d2","type":"Grid"},{"id":"2527d89c-9371-4ec2-82c6-f1363757367a","type":"LinearAxis"},{"id":"80a3f927-c4d1-404d-a58b-aa74b95ddefc","type":"Grid"},{"id":"c2b634a2-1f4d-46a7-89e2-ebce1a4fe02b","type":"Legend"},{"id":"53fe8616-5af0-4f3b-9619-81bb6fb84219","type":"GlyphRenderer"},{"id":"1a30742e-2bd0-4066-b2e5-68ac22713d9f","type":"GlyphRenderer"},{"id":"95322d76-d3f0-400e-973e-229a42a2966f","type":"GlyphRenderer"}],"title":{"id":"5e10e9fb-437d-4711-830a-6dbc20d8b838","type":"Title"},"toolbar":{"id":"5e39640a-581e-44aa-8b53-45577a8b7101","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ac2ddb1e-7453-4fb7-8586-11a19052225a","type":"FactorRange"},"x_scale":{"id":"2d02bb47-e8e7-462c-a920-0319e100a613","type":"CategoricalScale"},"y_range":{"id":"3800bbc0-dc93-4f5b-8c44-15ead579a2f8","type":"DataRange1d"},"y_scale":{"id":"132bb33f-42d7-4f2e-8915-c5397eeea9bd","type":"LinearScale"}},"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9787dd00-d09f-4b46-b652-fd495c068018","type":"BasicTicker"},{"attributes":{"source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"}},"id":"118dcda6-94de-4cd2-90ba-ba45fc3f1ff5","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1a30742e-2bd0-4066-b2e5-68ac22713d9f","type":"GlyphRenderer"}]},"id":"02f9bcba-2924-46c8-a04c-a852e056c310","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"8ccb1b32-61a1-42a7-9e94-0d6aafd9a1cf","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"0f56f6a2-cf38-4dae-83c4-c1b4e41c1c01","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b4735900-142f-4830-92a1-97e517f0d8bc","type":"VBar"},{"attributes":{"formatter":{"id":"9aa00288-a8ed-4635-bbec-f2aa7469cde2","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5c46eb-2f76-4cf6-98ee-36a0d06fb9d4","type":"CategoricalTicker"}},"id":"36541d78-5f3f-4743-81cc-91f7b3f976dc","type":"CategoricalAxis"},{"attributes":{},"id":"1d5c46eb-2f76-4cf6-98ee-36a0d06fb9d4","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"f222c82e-0b85-4b99-8efe-db2c5917129c","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"09ee8d90-de58-4fce-bc25-2a3a651ad31d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"6ac420d3-5e3a-499f-80f4-c77d5fa0c2fd","type":"VBar"},{"attributes":{"source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"}},"id":"4bad64f0-fc0b-4855-a642-455ea57d04c0","type":"CDSView"},{"attributes":{"fields":["2015","2016","2017"]},"id":"0f56f6a2-cf38-4dae-83c4-c1b4e41c1c01","type":"Stack"},{"attributes":{},"id":"9a456ee5-03f2-444d-9b7a-789a97dddf7f","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"07142d1e-4992-49a4-b477-45fb2ae62095","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"f601b7ea-db53-4153-961c-c3c2b0e18467","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"5c0581e5-dac9-4739-90c4-5258461a0688","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"},"ticker":{"id":"9787dd00-d09f-4b46-b652-fd495c068018","type":"BasicTicker"}},"id":"80a3f927-c4d1-404d-a58b-aa74b95ddefc","type":"Grid"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"ac2ddb1e-7453-4fb7-8586-11a19052225a","type":"FactorRange"},{"attributes":{"bottom":{"expr":{"id":"f222c82e-0b85-4b99-8efe-db2c5917129c","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"09ee8d90-de58-4fce-bc25-2a3a651ad31d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"9bb60ca7-72c6-4a15-a19c-31f06eaf326e","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fe478521-1eb4-42be-b7e6-021dfd60ec63","type":"HoverTool"},{"id":"6ab4c08b-35cb-42bd-89a7-28ae624cb549","type":"HoverTool"},{"id":"00fd01f5-4b82-413c-813a-ee02ef49bd47","type":"HoverTool"}]},"id":"5e39640a-581e-44aa-8b53-45577a8b7101","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"07142d1e-4992-49a4-b477-45fb2ae62095","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"f601b7ea-db53-4153-961c-c3c2b0e18467","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"563340f0-9102-44e5-9a74-12e51c692f7b","type":"VBar"},{"attributes":{"fields":[]},"id":"f222c82e-0b85-4b99-8efe-db2c5917129c","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"8ccb1b32-61a1-42a7-9e94-0d6aafd9a1cf","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"07142d1e-4992-49a4-b477-45fb2ae62095","type":"Stack"},{"attributes":{"formatter":{"id":"6521d5a1-043b-451a-aa22-212b8dfc0eb4","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"},"ticker":{"id":"9787dd00-d09f-4b46-b652-fd495c068018","type":"BasicTicker"}},"id":"2527d89c-9371-4ec2-82c6-f1363757367a","type":"LinearAxis"},{"attributes":{},"id":"2d02bb47-e8e7-462c-a920-0319e100a613","type":"CategoricalScale"},{"attributes":{"callback":null,"renderers":[{"id":"95322d76-d3f0-400e-973e-229a42a2966f","type":"GlyphRenderer"}],"tooltips":[["2017 total","@2017"],["index","$index"]]},"id":"00fd01f5-4b82-413c-813a-ee02ef49bd47","type":"HoverTool"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"5e10e9fb-437d-4711-830a-6dbc20d8b838","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"3800bbc0-dc93-4f5b-8c44-15ead579a2f8","type":"DataRange1d"},{"attributes":{"source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"}},"id":"23f41d63-8b87-4b15-bbe1-1c2d1ca4c497","type":"CDSView"},{"attributes":{},"id":"66de2fa0-41fb-49ec-a3bd-ec0bc66992ba","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":[{"id":"1a30742e-2bd0-4066-b2e5-68ac22713d9f","type":"GlyphRenderer"}],"tooltips":[["2016 total","@2016"],["index","$index"]]},"id":"6ab4c08b-35cb-42bd-89a7-28ae624cb549","type":"HoverTool"},{"attributes":{"data_source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"},"glyph":{"id":"5c0581e5-dac9-4739-90c4-5258461a0688","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"563340f0-9102-44e5-9a74-12e51c692f7b","type":"VBar"},"selection_glyph":null,"view":{"id":"118dcda6-94de-4cd2-90ba-ba45fc3f1ff5","type":"CDSView"}},"id":"1a30742e-2bd0-4066-b2e5-68ac22713d9f","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"53fe8616-5af0-4f3b-9619-81bb6fb84219","type":"GlyphRenderer"}]},"id":"142546c2-2f71-4400-9b1b-d06e202882a3","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"09ee8d90-de58-4fce-bc25-2a3a651ad31d","type":"Stack"},{"attributes":{},"id":"9aa00288-a8ed-4635-bbec-f2aa7469cde2","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"9a456ee5-03f2-444d-9b7a-789a97dddf7f","type":"Selection"},"selection_policy":{"id":"66de2fa0-41fb-49ec-a3bd-ec0bc66992ba","type":"UnionRenderers"}},"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"},"glyph":{"id":"d9d47a0d-44ee-4560-9233-acaab202a3f5","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"b4735900-142f-4830-92a1-97e517f0d8bc","type":"VBar"},"selection_glyph":null,"view":{"id":"23f41d63-8b87-4b15-bbe1-1c2d1ca4c497","type":"CDSView"}},"id":"95322d76-d3f0-400e-973e-229a42a2966f","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"f601b7ea-db53-4153-961c-c3c2b0e18467","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"8ccb1b32-61a1-42a7-9e94-0d6aafd9a1cf","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"0f56f6a2-cf38-4dae-83c4-c1b4e41c1c01","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"d9d47a0d-44ee-4560-9233-acaab202a3f5","type":"VBar"},{"attributes":{"data_source":{"id":"2aa2850c-e089-47e6-a11f-718d8fe6697d","type":"ColumnDataSource"},"glyph":{"id":"6ac420d3-5e3a-499f-80f4-c77d5fa0c2fd","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"9bb60ca7-72c6-4a15-a19c-31f06eaf326e","type":"VBar"},"selection_glyph":null,"view":{"id":"4bad64f0-fc0b-4855-a642-455ea57d04c0","type":"CDSView"}},"id":"53fe8616-5af0-4f3b-9619-81bb6fb84219","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"95322d76-d3f0-400e-973e-229a42a2966f","type":"GlyphRenderer"}]},"id":"9602ecd1-ef4d-451f-a122-68b845998048","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"d2c405f4-dfd6-4394-80ca-5003bf9bec22","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5c46eb-2f76-4cf6-98ee-36a0d06fb9d4","type":"CategoricalTicker"}},"id":"971429f0-bb3e-43d8-a42c-dc9cdfab68d2","type":"Grid"}],"root_ids":["d2c405f4-dfd6-4394-80ca-5003bf9bec22"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"dbc73b51-fbf6-4bfb-b926-d2cbef57166b","elementid":"2f69183e-68c3-46bc-97cc-c748ea823b1d","modelid":"d2c405f4-dfd6-4394-80ca-5003bf9bec22"}];
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