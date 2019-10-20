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
      };var element = document.getElementById("2a492825-a911-4b73-a443-f5e36b84b871");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2a492825-a911-4b73-a443-f5e36b84b871' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"888848f9-dd22-48cf-8ef3-c9fd9ef4bebb":{"roots":{"references":[{"attributes":{"below":[{"id":"e0759c54-39e4-4b40-af89-1e2af92c6340","type":"CategoricalAxis"}],"left":[{"id":"96216483-2910-4481-a777-618bf110e6d4","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"e0759c54-39e4-4b40-af89-1e2af92c6340","type":"CategoricalAxis"},{"id":"6a0737c2-fd55-4806-861a-42d011991b16","type":"Grid"},{"id":"96216483-2910-4481-a777-618bf110e6d4","type":"LinearAxis"},{"id":"e2f02997-968e-469a-af05-496af9063cb9","type":"Grid"},{"id":"b394368c-2dcc-435c-92fd-195b2515ba39","type":"Legend"},{"id":"096e34f1-8cc2-4303-a889-1686b1e12918","type":"GlyphRenderer"},{"id":"1e76e52f-a504-4aa3-9642-0ddb870372fb","type":"GlyphRenderer"},{"id":"9f8d843d-5cbe-4ec0-a58f-177e2b1fa98c","type":"GlyphRenderer"}],"title":{"id":"690e7303-f9de-48e9-9708-b89a7972a32d","type":"Title"},"toolbar":{"id":"97a804f8-700a-4117-b932-5916872855eb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f972457f-8ba8-48d0-be7e-2897b600f755","type":"FactorRange"},"x_scale":{"id":"e156b6f4-45c6-4b68-a6f4-3d7881bc7f96","type":"CategoricalScale"},"y_range":{"id":"3af281bb-4070-4695-bd33-52aa8b9b3c27","type":"DataRange1d"},"y_scale":{"id":"536ff4fa-15c5-4da5-b395-cb7a43e939f7","type":"LinearScale"}},"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"096e34f1-8cc2-4303-a889-1686b1e12918","type":"GlyphRenderer"}]},"id":"5fd92ce6-8987-443d-9131-a6c381382451","type":"LegendItem"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1e76e52f-a504-4aa3-9642-0ddb870372fb","type":"GlyphRenderer"}]},"id":"5e6e3504-a107-4874-9df5-eb16a694d9cd","type":"LegendItem"},{"attributes":{"fields":[]},"id":"64650aab-a730-4f52-908a-f69153ccb347","type":"Stack"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"},"ticker":{"id":"9999d535-c376-40cf-9b67-3108d9928417","type":"CategoricalTicker"}},"id":"6a0737c2-fd55-4806-861a-42d011991b16","type":"Grid"},{"attributes":{},"id":"b2db80dd-19d9-482b-8ee0-4a54e8a21b71","type":"Selection"},{"attributes":{},"id":"4cb4b1aa-2542-4d39-b4e8-316f129b8ac7","type":"BasicTickFormatter"},{"attributes":{"fields":["2015"]},"id":"aad5f87d-28f4-4f21-b78b-aee8278eb42a","type":"Stack"},{"attributes":{},"id":"3596522c-2386-47f6-a93c-87fefa67eb21","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"e5f85156-aca9-4ede-9341-b22b1534ee73","type":"Selection"},"selection_policy":{"id":"9e0ddfb6-f91b-419e-ac08-2118dfa901bc","type":"UnionRenderers"}},"id":"c31cbe60-1f79-4fb9-9d89-e8f3879dba60","type":"ColumnDataSource"},{"attributes":{},"id":"e156b6f4-45c6-4b68-a6f4-3d7881bc7f96","type":"CategoricalScale"},{"attributes":{},"id":"536ff4fa-15c5-4da5-b395-cb7a43e939f7","type":"LinearScale"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"b2db80dd-19d9-482b-8ee0-4a54e8a21b71","type":"Selection"},"selection_policy":{"id":"ef3a43da-7053-4e41-90fa-36010fa7b13e","type":"UnionRenderers"}},"id":"cf3fd7da-90db-43b1-a51b-755a1318ba38","type":"ColumnDataSource"},{"attributes":{},"id":"9e0ddfb6-f91b-419e-ac08-2118dfa901bc","type":"UnionRenderers"},{"attributes":{"callback":null,"start":0},"id":"3af281bb-4070-4695-bd33-52aa8b9b3c27","type":"DataRange1d"},{"attributes":{},"id":"9999d535-c376-40cf-9b67-3108d9928417","type":"CategoricalTicker"},{"attributes":{"source":{"id":"cf3fd7da-90db-43b1-a51b-755a1318ba38","type":"ColumnDataSource"}},"id":"8d93d695-3a2e-43e8-a1ac-7d7f5d010ec3","type":"CDSView"},{"attributes":{"formatter":{"id":"3596522c-2386-47f6-a93c-87fefa67eb21","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"},"ticker":{"id":"9999d535-c376-40cf-9b67-3108d9928417","type":"CategoricalTicker"}},"id":"e0759c54-39e4-4b40-af89-1e2af92c6340","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"5fd92ce6-8987-443d-9131-a6c381382451","type":"LegendItem"},{"id":"5e6e3504-a107-4874-9df5-eb16a694d9cd","type":"LegendItem"},{"id":"bdf28247-dce1-4e37-b5dc-acd6f7602bb0","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"}},"id":"b394368c-2dcc-435c-92fd-195b2515ba39","type":"Legend"},{"attributes":{"data_source":{"id":"1842f41f-2a8d-4364-a61e-d5c9b23f4ed4","type":"ColumnDataSource"},"glyph":{"id":"feb46801-3e29-44f9-8998-4624d7b0c230","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"3f3e7cdf-dc97-4f28-b2dd-e3f65f88aacb","type":"VBar"},"selection_glyph":null,"view":{"id":"6cd5719f-cea8-4d7a-bc98-36c285d34e46","type":"CDSView"}},"id":"9f8d843d-5cbe-4ec0-a58f-177e2b1fa98c","type":"GlyphRenderer"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"88cbf152-84f6-4aa8-ba20-fabd6064b726","type":"HoverTool"},{"attributes":{"bottom":{"expr":{"id":"a02415d8-0d40-4d09-b437-10ff097d2426","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"fce53532-9091-400a-a220-e3f1a9137258","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"cd7a3d52-ad50-486d-9b90-acc60ece4d9e","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"778acda9-0207-4cae-9c01-11749d150b96","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"56f6b69e-6c86-48f4-ab02-59d649b3b8ae","type":"Stack"},{"attributes":{"source":{"id":"1842f41f-2a8d-4364-a61e-d5c9b23f4ed4","type":"ColumnDataSource"}},"id":"6cd5719f-cea8-4d7a-bc98-36c285d34e46","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"},"ticker":{"id":"a05e372e-bc5f-4614-a4bc-1487781e5612","type":"BasicTicker"}},"id":"e2f02997-968e-469a-af05-496af9063cb9","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"9f8d843d-5cbe-4ec0-a58f-177e2b1fa98c","type":"GlyphRenderer"}]},"id":"bdf28247-dce1-4e37-b5dc-acd6f7602bb0","type":"LegendItem"},{"attributes":{"data_source":{"id":"c31cbe60-1f79-4fb9-9d89-e8f3879dba60","type":"ColumnDataSource"},"glyph":{"id":"ab0e7972-435e-4c45-b3e5-0bd46c69c650","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"05603dba-e108-407b-9376-3779fe8bd50f","type":"VBar"},"selection_glyph":null,"view":{"id":"a3b82362-cc92-4eaa-8a27-af087b69980b","type":"CDSView"}},"id":"096e34f1-8cc2-4303-a889-1686b1e12918","type":"GlyphRenderer"},{"attributes":{},"id":"1c29c417-70f9-4515-80f4-4abba84e613a","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"64650aab-a730-4f52-908a-f69153ccb347","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"aad5f87d-28f4-4f21-b78b-aee8278eb42a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ab0e7972-435e-4c45-b3e5-0bd46c69c650","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"690e7303-f9de-48e9-9708-b89a7972a32d","type":"Title"},{"attributes":{},"id":"a6406d59-5eaa-4145-b837-383ee384ea48","type":"Selection"},{"attributes":{"formatter":{"id":"4cb4b1aa-2542-4d39-b4e8-316f129b8ac7","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"132be481-6412-4e6e-9a9b-3b7328a44d64","subtype":"Figure","type":"Plot"},"ticker":{"id":"a05e372e-bc5f-4614-a4bc-1487781e5612","type":"BasicTicker"}},"id":"96216483-2910-4481-a777-618bf110e6d4","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"88cbf152-84f6-4aa8-ba20-fabd6064b726","type":"HoverTool"}]},"id":"97a804f8-700a-4117-b932-5916872855eb","type":"Toolbar"},{"attributes":{},"id":"ef3a43da-7053-4e41-90fa-36010fa7b13e","type":"UnionRenderers"},{"attributes":{},"id":"a05e372e-bc5f-4614-a4bc-1487781e5612","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"a02415d8-0d40-4d09-b437-10ff097d2426","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"fce53532-9091-400a-a220-e3f1a9137258","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1db017ca-891a-469c-9a95-cb3c598cdc6f","type":"VBar"},{"attributes":{"source":{"id":"c31cbe60-1f79-4fb9-9d89-e8f3879dba60","type":"ColumnDataSource"}},"id":"a3b82362-cc92-4eaa-8a27-af087b69980b","type":"CDSView"},{"attributes":{"data_source":{"id":"cf3fd7da-90db-43b1-a51b-755a1318ba38","type":"ColumnDataSource"},"glyph":{"id":"cd7a3d52-ad50-486d-9b90-acc60ece4d9e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"1db017ca-891a-469c-9a95-cb3c598cdc6f","type":"VBar"},"selection_glyph":null,"view":{"id":"8d93d695-3a2e-43e8-a1ac-7d7f5d010ec3","type":"CDSView"}},"id":"1e76e52f-a504-4aa3-9642-0ddb870372fb","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"fce53532-9091-400a-a220-e3f1a9137258","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"a02415d8-0d40-4d09-b437-10ff097d2426","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"a6406d59-5eaa-4145-b837-383ee384ea48","type":"Selection"},"selection_policy":{"id":"1c29c417-70f9-4515-80f4-4abba84e613a","type":"UnionRenderers"}},"id":"1842f41f-2a8d-4364-a61e-d5c9b23f4ed4","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"f972457f-8ba8-48d0-be7e-2897b600f755","type":"FactorRange"},{"attributes":{"bottom":{"expr":{"id":"778acda9-0207-4cae-9c01-11749d150b96","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"56f6b69e-6c86-48f4-ab02-59d649b3b8ae","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"feb46801-3e29-44f9-8998-4624d7b0c230","type":"VBar"},{"attributes":{},"id":"e5f85156-aca9-4ede-9341-b22b1534ee73","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"64650aab-a730-4f52-908a-f69153ccb347","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"aad5f87d-28f4-4f21-b78b-aee8278eb42a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"05603dba-e108-407b-9376-3779fe8bd50f","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"778acda9-0207-4cae-9c01-11749d150b96","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"56f6b69e-6c86-48f4-ab02-59d649b3b8ae","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3f3e7cdf-dc97-4f28-b2dd-e3f65f88aacb","type":"VBar"}],"root_ids":["132be481-6412-4e6e-9a9b-3b7328a44d64"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"888848f9-dd22-48cf-8ef3-c9fd9ef4bebb","roots":{"132be481-6412-4e6e-9a9b-3b7328a44d64":"2a492825-a911-4b73-a443-f5e36b84b871"}}];
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