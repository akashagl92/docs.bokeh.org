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
      };var element = document.getElementById("385ccad7-190d-4ea8-8601-3581c185b0c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '385ccad7-190d-4ea8-8601-3581c185b0c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e41a1dc4-27f0-4c60-8cb4-c89f786c1914":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"94dc076f-b3a5-492c-87fe-59e54a075737","type":"Title"},{"attributes":{},"id":"bf4e3b89-0ef3-4f6f-a20a-cc69da824d86","type":"HelpTool"},{"attributes":{},"id":"2cf8697c-18a2-4523-92d9-a7e377bf6ee2","type":"BasicTicker"},{"attributes":{},"id":"45b3d099-c739-406d-a4c8-aa634bc3c48c","type":"LinearScale"},{"attributes":{},"id":"f4361a5b-195f-42d9-9e30-47690558b056","type":"ResetTool"},{"attributes":{"data_source":{"id":"c36a6904-a158-47b7-8512-4f99a427ba1b","type":"ColumnDataSource"},"glyph":{"id":"4c199b20-2ab5-47b6-8b82-9c413b9be4a1","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"723cabbc-28ef-49ad-9313-65ae0ba27f26","type":"Ellipse"},"selection_glyph":null,"view":{"id":"adc7119e-8480-490c-958a-bffe89de17fa","type":"CDSView"}},"id":"af772d67-13b6-41a5-ae4a-a6202212af23","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c36a6904-a158-47b7-8512-4f99a427ba1b","type":"ColumnDataSource"}},"id":"adc7119e-8480-490c-958a-bffe89de17fa","type":"CDSView"},{"attributes":{},"id":"43ef8ddd-6afd-4ef1-ab3d-47e9e04fcd88","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"3283fd5e-77bc-4473-96ee-0902c4dd499a","type":"Selection"},"selection_policy":{"id":"43ef8ddd-6afd-4ef1-ab3d-47e9e04fcd88","type":"UnionRenderers"}},"id":"c36a6904-a158-47b7-8512-4f99a427ba1b","type":"ColumnDataSource"},{"attributes":{},"id":"3283fd5e-77bc-4473-96ee-0902c4dd499a","type":"Selection"},{"attributes":{"callback":null},"id":"afdba60f-dbb9-4ebb-b73c-0c7930e85e32","type":"DataRange1d"},{"attributes":{},"id":"936e115b-6d7c-42e8-b394-59d1daee3023","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a99cd7f-0269-494a-b253-6f5e8e8f3edc","type":"BoxAnnotation"},{"attributes":{},"id":"826e96bb-806b-4877-932f-11dff4ca25a6","type":"BasicTicker"},{"attributes":{},"id":"31492f71-82c3-4d53-8cac-98345b711a7e","type":"SaveTool"},{"attributes":{},"id":"e39552af-4e18-438c-a408-1fbdd8b495f6","type":"LinearScale"},{"attributes":{"formatter":{"id":"1cb79537-6deb-4f0e-9b97-7b36c0ef9fd1","type":"BasicTickFormatter"},"plot":{"id":"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7","subtype":"Figure","type":"Plot"},"ticker":{"id":"826e96bb-806b-4877-932f-11dff4ca25a6","type":"BasicTicker"}},"id":"df0c7a35-ba92-45c6-b94c-e98df518d077","type":"LinearAxis"},{"attributes":{"plot":{"id":"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7","subtype":"Figure","type":"Plot"},"ticker":{"id":"826e96bb-806b-4877-932f-11dff4ca25a6","type":"BasicTicker"}},"id":"3380ca73-905e-488f-ad1b-b27f11ca1c34","type":"Grid"},{"attributes":{"below":[{"id":"df0c7a35-ba92-45c6-b94c-e98df518d077","type":"LinearAxis"}],"left":[{"id":"ffbd2c3b-4389-4318-8d14-eba93174b59c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"df0c7a35-ba92-45c6-b94c-e98df518d077","type":"LinearAxis"},{"id":"3380ca73-905e-488f-ad1b-b27f11ca1c34","type":"Grid"},{"id":"ffbd2c3b-4389-4318-8d14-eba93174b59c","type":"LinearAxis"},{"id":"2842d3f8-a700-43c0-a50c-ef6a88687057","type":"Grid"},{"id":"2a99cd7f-0269-494a-b253-6f5e8e8f3edc","type":"BoxAnnotation"},{"id":"af772d67-13b6-41a5-ae4a-a6202212af23","type":"GlyphRenderer"}],"title":{"id":"94dc076f-b3a5-492c-87fe-59e54a075737","type":"Title"},"toolbar":{"id":"cc7aee5e-9884-4bd2-bb7c-f4cf37be3f42","type":"Toolbar"},"x_range":{"id":"ce08bf96-006b-4266-83e8-c06ad080a3ca","type":"DataRange1d"},"x_scale":{"id":"e39552af-4e18-438c-a408-1fbdd8b495f6","type":"LinearScale"},"y_range":{"id":"afdba60f-dbb9-4ebb-b73c-0c7930e85e32","type":"DataRange1d"},"y_scale":{"id":"45b3d099-c739-406d-a4c8-aa634bc3c48c","type":"LinearScale"}},"id":"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cf8697c-18a2-4523-92d9-a7e377bf6ee2","type":"BasicTicker"}},"id":"2842d3f8-a700-43c0-a50c-ef6a88687057","type":"Grid"},{"attributes":{"overlay":{"id":"2a99cd7f-0269-494a-b253-6f5e8e8f3edc","type":"BoxAnnotation"}},"id":"ecee214c-dbd6-412b-8a98-76e95faa0134","type":"BoxZoomTool"},{"attributes":{},"id":"7c309123-9c94-413f-84e3-374fa7ed3f2b","type":"PanTool"},{"attributes":{"formatter":{"id":"d87fb068-326e-4090-91f0-4a7130676966","type":"BasicTickFormatter"},"plot":{"id":"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cf8697c-18a2-4523-92d9-a7e377bf6ee2","type":"BasicTicker"}},"id":"ffbd2c3b-4389-4318-8d14-eba93174b59c","type":"LinearAxis"},{"attributes":{},"id":"d87fb068-326e-4090-91f0-4a7130676966","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c199b20-2ab5-47b6-8b82-9c413b9be4a1","type":"Ellipse"},{"attributes":{"callback":null},"id":"ce08bf96-006b-4266-83e8-c06ad080a3ca","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7c309123-9c94-413f-84e3-374fa7ed3f2b","type":"PanTool"},{"id":"936e115b-6d7c-42e8-b394-59d1daee3023","type":"WheelZoomTool"},{"id":"ecee214c-dbd6-412b-8a98-76e95faa0134","type":"BoxZoomTool"},{"id":"31492f71-82c3-4d53-8cac-98345b711a7e","type":"SaveTool"},{"id":"f4361a5b-195f-42d9-9e30-47690558b056","type":"ResetTool"},{"id":"bf4e3b89-0ef3-4f6f-a20a-cc69da824d86","type":"HelpTool"}]},"id":"cc7aee5e-9884-4bd2-bb7c-f4cf37be3f42","type":"Toolbar"},{"attributes":{},"id":"1cb79537-6deb-4f0e-9b97-7b36c0ef9fd1","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"723cabbc-28ef-49ad-9313-65ae0ba27f26","type":"Ellipse"}],"root_ids":["67287db3-bad0-44e4-9bb6-6a5ad55a1ff7"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e41a1dc4-27f0-4c60-8cb4-c89f786c1914","roots":{"67287db3-bad0-44e4-9bb6-6a5ad55a1ff7":"385ccad7-190d-4ea8-8601-3581c185b0c0"}}];
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