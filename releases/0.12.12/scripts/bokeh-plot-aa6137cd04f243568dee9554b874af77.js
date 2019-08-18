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
      };var element = document.getElementById("9739b6d4-d633-4f98-914f-39bbb54ed428");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9739b6d4-d633-4f98-914f-39bbb54ed428' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"ace63ea0-e76b-43b3-abf3-0e47b2b39b8f":{"roots":{"references":[{"attributes":{"items":[{"id":"32530980-d9d6-44a5-9302-a79e8b407723","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"}},"id":"38af4ed5-051c-420c-b4f5-d30b6f019bcc","type":"Legend"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"5af83654-dbb4-497c-9351-eb7fa8c475be","type":"Title"},{"attributes":{},"id":"ea85208b-f599-430e-bdeb-ccdf241295c0","type":"CategoricalScale"},{"attributes":{},"id":"74602dc1-6f30-4496-b413-a305bc50b84c","type":"PanTool"},{"attributes":{},"id":"bd7f7c6c-eb11-45bb-a3e9-fbffb09c7576","type":"WheelZoomTool"},{"attributes":{},"id":"f0ef41a0-de2d-4658-aed9-88d6e1de3caa","type":"SaveTool"},{"attributes":{"data_source":{"id":"1426c815-fc8f-44cb-b2ae-be30f50aa313","type":"ColumnDataSource"},"glyph":{"id":"49cad4cb-6d18-4442-8100-5f52985cdc06","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6cb31ad-7b16-41da-bc84-eee47c81987b","type":"VBar"},"selection_glyph":null,"view":{"id":"465f11a6-ba7c-4c39-baff-abba368db6d4","type":"CDSView"}},"id":"4db8b1a9-c059-4481-960b-3d3e4bca1086","type":"GlyphRenderer"},{"attributes":{},"id":"79b2b073-a125-43cb-8ce2-8daac4209302","type":"ResetTool"},{"attributes":{"overlay":{"id":"f04aa696-4a42-4be8-aaf0-97a8c4368fa9","type":"BoxAnnotation"}},"id":"e819fc51-9e24-4cc2-85cd-f68269254c70","type":"BoxZoomTool"},{"attributes":{},"id":"e9489520-b9d9-42de-8f08-4f133bd674e6","type":"HelpTool"},{"attributes":{},"id":"65175acd-cfc5-4461-bd6d-92a1d725f541","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"0410060b-4808-44ef-b76f-7e6563439225","type":"CategoricalAxis"}],"left":[{"id":"e2291868-8ea1-4a64-ba01-60f07da3e855","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"0410060b-4808-44ef-b76f-7e6563439225","type":"CategoricalAxis"},{"id":"15ae2f2f-2e9d-48e7-a962-779c39593a07","type":"Grid"},{"id":"e2291868-8ea1-4a64-ba01-60f07da3e855","type":"LinearAxis"},{"id":"f94af265-5c3f-426a-9b6d-60d577a23803","type":"Grid"},{"id":"f04aa696-4a42-4be8-aaf0-97a8c4368fa9","type":"BoxAnnotation"},{"id":"38af4ed5-051c-420c-b4f5-d30b6f019bcc","type":"Legend"},{"id":"4db8b1a9-c059-4481-960b-3d3e4bca1086","type":"GlyphRenderer"}],"title":{"id":"5af83654-dbb4-497c-9351-eb7fa8c475be","type":"Title"},"toolbar":{"id":"1dd3451b-371f-4d27-9bd5-a8a36ec87995","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8251006a-155d-4e19-b602-bab32bf7441e","type":"FactorRange"},"x_scale":{"id":"ea85208b-f599-430e-bdeb-ccdf241295c0","type":"CategoricalScale"},"y_range":{"id":"47dd9fd8-be68-4383-849e-abbc911adfd3","type":"DataRange1d"},"y_scale":{"id":"c4e2b197-666c-41fd-9fa6-27b47cc90538","type":"LinearScale"}},"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"65175acd-cfc5-4461-bd6d-92a1d725f541","type":"CategoricalTickFormatter"},"plot":{"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"},"ticker":{"id":"f91a7d56-86b8-45db-b3fe-d1be3216edd1","type":"CategoricalTicker"}},"id":"0410060b-4808-44ef-b76f-7e6563439225","type":"CategoricalAxis"},{"attributes":{"source":{"id":"1426c815-fc8f-44cb-b2ae-be30f50aa313","type":"ColumnDataSource"}},"id":"465f11a6-ba7c-4c39-baff-abba368db6d4","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"},"ticker":{"id":"632614d2-a7db-4aec-885a-cf753ae04f43","type":"BasicTicker"}},"id":"f94af265-5c3f-426a-9b6d-60d577a23803","type":"Grid"},{"attributes":{"callback":null,"column_names":["fruits","counts"],"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"1426c815-fc8f-44cb-b2ae-be30f50aa313","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"},"ticker":{"id":"f91a7d56-86b8-45db-b3fe-d1be3216edd1","type":"CategoricalTicker"}},"id":"15ae2f2f-2e9d-48e7-a962-779c39593a07","type":"Grid"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"4db8b1a9-c059-4481-960b-3d3e4bca1086","type":"GlyphRenderer"}]},"id":"32530980-d9d6-44a5-9302-a79e8b407723","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f04aa696-4a42-4be8-aaf0-97a8c4368fa9","type":"BoxAnnotation"},{"attributes":{},"id":"632614d2-a7db-4aec-885a-cf753ae04f43","type":"BasicTicker"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"b0ae748f-a0ac-43c5-b59b-9ca533f328f7","type":"CategoricalColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e6cb31ad-7b16-41da-bc84-eee47c81987b","type":"VBar"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"b0ae748f-a0ac-43c5-b59b-9ca533f328f7","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"49cad4cb-6d18-4442-8100-5f52985cdc06","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74602dc1-6f30-4496-b413-a305bc50b84c","type":"PanTool"},{"id":"bd7f7c6c-eb11-45bb-a3e9-fbffb09c7576","type":"WheelZoomTool"},{"id":"e819fc51-9e24-4cc2-85cd-f68269254c70","type":"BoxZoomTool"},{"id":"f0ef41a0-de2d-4658-aed9-88d6e1de3caa","type":"SaveTool"},{"id":"79b2b073-a125-43cb-8ce2-8daac4209302","type":"ResetTool"},{"id":"e9489520-b9d9-42de-8f08-4f133bd674e6","type":"HelpTool"}]},"id":"1dd3451b-371f-4d27-9bd5-a8a36ec87995","type":"Toolbar"},{"attributes":{},"id":"66f8bf77-24bf-4207-954f-fe3b64a5d472","type":"BasicTickFormatter"},{"attributes":{},"id":"c4e2b197-666c-41fd-9fa6-27b47cc90538","type":"LinearScale"},{"attributes":{},"id":"f91a7d56-86b8-45db-b3fe-d1be3216edd1","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"66f8bf77-24bf-4207-954f-fe3b64a5d472","type":"BasicTickFormatter"},"plot":{"id":"dced920f-1094-4598-9357-f8f14eccd825","subtype":"Figure","type":"Plot"},"ticker":{"id":"632614d2-a7db-4aec-885a-cf753ae04f43","type":"BasicTicker"}},"id":"e2291868-8ea1-4a64-ba01-60f07da3e855","type":"LinearAxis"},{"attributes":{"callback":null,"end":9,"start":0},"id":"47dd9fd8-be68-4383-849e-abbc911adfd3","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"8251006a-155d-4e19-b602-bab32bf7441e","type":"FactorRange"}],"root_ids":["dced920f-1094-4598-9357-f8f14eccd825"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"ace63ea0-e76b-43b3-abf3-0e47b2b39b8f","elementid":"9739b6d4-d633-4f98-914f-39bbb54ed428","modelid":"dced920f-1094-4598-9357-f8f14eccd825"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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