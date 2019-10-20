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
      };var element = document.getElementById("88f0f017-0777-4cc0-863c-0e3a86e7300e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '88f0f017-0777-4cc0-863c-0e3a86e7300e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1d8204d7-54c0-41f3-aebc-5700c061ee78":{"roots":{"references":[{"attributes":{},"id":"98a4d162-72da-485c-bfd9-78f5d45cb967","type":"Selection"},{"attributes":{"source":{"id":"f7ae4182-6674-4d0a-8387-3087f628333f","type":"ColumnDataSource"}},"id":"0b8f6501-ac21-4eb1-8109-744062e23859","type":"CDSView"},{"attributes":{"plot":{"id":"761396a8-898c-4541-9cf1-0d6c080329ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d8053bc-99b8-4107-84bb-87d001f1cc3d","type":"BasicTicker"}},"id":"ec840326-4162-4b8c-a219-fdecc0bee17a","type":"Grid"},{"attributes":{"callback":null},"id":"ec244001-00ab-4181-8d71-86581f4a603b","type":"DataRange1d"},{"attributes":{},"id":"059c308e-47d2-4c80-98f3-a3dbca1f9cc6","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cd0d49f6-9348-4f91-ad16-92ad7a61c3e3","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"761396a8-898c-4541-9cf1-0d6c080329ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"28ed4367-394f-4c4c-b2df-12ddb5051368","type":"BasicTicker"}},"id":"1319531c-07a8-4f40-8454-f9c176e737e1","type":"LinearAxis"},{"attributes":{},"id":"0da77ab1-aa69-4fe0-802f-bfecb6c016c1","type":"LinearScale"},{"attributes":{"data_source":{"id":"f7ae4182-6674-4d0a-8387-3087f628333f","type":"ColumnDataSource"},"glyph":{"id":"31740e9c-3ff3-4fb7-8b5d-c8c15c65799c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df72961b-3782-4a72-832e-ee62e4ed48bc","type":"Circle"},"selection_glyph":null,"view":{"id":"0b8f6501-ac21-4eb1-8109-744062e23859","type":"CDSView"}},"id":"33852cf0-1273-4628-b305-8740a329bcb9","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c0255876-e582-4358-874f-9b6a84b53daf","type":"LinearAxis"}],"left":[{"id":"1319531c-07a8-4f40-8454-f9c176e737e1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c0255876-e582-4358-874f-9b6a84b53daf","type":"LinearAxis"},{"id":"ec840326-4162-4b8c-a219-fdecc0bee17a","type":"Grid"},{"id":"1319531c-07a8-4f40-8454-f9c176e737e1","type":"LinearAxis"},{"id":"1edd7744-0e9a-4a78-a9f1-e2df5fd710f2","type":"Grid"},{"id":"46d3e1b2-807e-4379-be1e-42dbc45c720c","type":"BoxAnnotation"},{"id":"33852cf0-1273-4628-b305-8740a329bcb9","type":"GlyphRenderer"}],"title":{"id":"a2112e25-e9c4-4c2e-8c48-201eddfde370","type":"Title"},"toolbar":{"id":"4f77e3f3-f50d-4422-8449-8a6eff457722","type":"Toolbar"},"x_range":{"id":"ec244001-00ab-4181-8d71-86581f4a603b","type":"DataRange1d"},"x_scale":{"id":"0da77ab1-aa69-4fe0-802f-bfecb6c016c1","type":"LinearScale"},"y_range":{"id":"b8479050-6ae9-4325-a847-7c7a7183bc71","type":"DataRange1d"},"y_scale":{"id":"887ef3b6-aeea-49cc-b20d-177f9957c033","type":"LinearScale"}},"id":"761396a8-898c-4541-9cf1-0d6c080329ef","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"089a8740-79ad-4e0a-9014-19d0df49c1fa","type":"UnionRenderers"},{"attributes":{},"id":"887ef3b6-aeea-49cc-b20d-177f9957c033","type":"LinearScale"},{"attributes":{"formatter":{"id":"059c308e-47d2-4c80-98f3-a3dbca1f9cc6","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"761396a8-898c-4541-9cf1-0d6c080329ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d8053bc-99b8-4107-84bb-87d001f1cc3d","type":"BasicTicker"}},"id":"c0255876-e582-4358-874f-9b6a84b53daf","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8e0c271-523a-4880-922a-f47602323755","type":"PanTool"},{"id":"b33b730a-64ed-4fb7-b780-34ce6afc0cd0","type":"WheelZoomTool"},{"id":"3339a7d5-d7f1-4e35-8f51-6e16cc266662","type":"BoxZoomTool"},{"id":"0fffcf8b-36c9-42b1-954f-04a4e45b49cc","type":"SaveTool"},{"id":"25be36b5-11ba-45b1-932f-6dbcc0b513f7","type":"ResetTool"},{"id":"caadd954-5fbd-4e59-9da8-274f99b4d984","type":"HelpTool"}]},"id":"4f77e3f3-f50d-4422-8449-8a6eff457722","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"761396a8-898c-4541-9cf1-0d6c080329ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"28ed4367-394f-4c4c-b2df-12ddb5051368","type":"BasicTicker"}},"id":"1edd7744-0e9a-4a78-a9f1-e2df5fd710f2","type":"Grid"},{"attributes":{},"id":"25be36b5-11ba-45b1-932f-6dbcc0b513f7","type":"ResetTool"},{"attributes":{},"id":"cd0d49f6-9348-4f91-ad16-92ad7a61c3e3","type":"BasicTickFormatter"},{"attributes":{},"id":"b33b730a-64ed-4fb7-b780-34ce6afc0cd0","type":"WheelZoomTool"},{"attributes":{},"id":"0d8053bc-99b8-4107-84bb-87d001f1cc3d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31740e9c-3ff3-4fb7-8b5d-c8c15c65799c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"df72961b-3782-4a72-832e-ee62e4ed48bc","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46d3e1b2-807e-4379-be1e-42dbc45c720c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b8479050-6ae9-4325-a847-7c7a7183bc71","type":"DataRange1d"},{"attributes":{},"id":"0fffcf8b-36c9-42b1-954f-04a4e45b49cc","type":"SaveTool"},{"attributes":{},"id":"28ed4367-394f-4c4c-b2df-12ddb5051368","type":"BasicTicker"},{"attributes":{},"id":"caadd954-5fbd-4e59-9da8-274f99b4d984","type":"HelpTool"},{"attributes":{"overlay":{"id":"46d3e1b2-807e-4379-be1e-42dbc45c720c","type":"BoxAnnotation"}},"id":"3339a7d5-d7f1-4e35-8f51-6e16cc266662","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"a2112e25-e9c4-4c2e-8c48-201eddfde370","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"98a4d162-72da-485c-bfd9-78f5d45cb967","type":"Selection"},"selection_policy":{"id":"089a8740-79ad-4e0a-9014-19d0df49c1fa","type":"UnionRenderers"}},"id":"f7ae4182-6674-4d0a-8387-3087f628333f","type":"ColumnDataSource"},{"attributes":{},"id":"b8e0c271-523a-4880-922a-f47602323755","type":"PanTool"}],"root_ids":["761396a8-898c-4541-9cf1-0d6c080329ef"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1d8204d7-54c0-41f3-aebc-5700c061ee78","roots":{"761396a8-898c-4541-9cf1-0d6c080329ef":"88f0f017-0777-4cc0-863c-0e3a86e7300e"}}];
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