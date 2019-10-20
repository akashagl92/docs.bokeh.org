(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("00997b28-32d5-49cd-bf28-9804230734a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00997b28-32d5-49cd-bf28-9804230734a2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"8768fbd7-5734-4084-a40a-63d061ede78f":{"roots":{"references":[{"attributes":{},"id":"1247cd1c-9bdc-43e2-ae5d-b199b4923be0","type":"BasicTicker"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"1a8cf22c-7951-4368-9255-f27a9604c274","type":"HelpTool"},{"attributes":{},"id":"013e292a-6a83-495e-8c9d-663c35c30cde","type":"BasicTicker"},{"attributes":{},"id":"e551834f-f383-4eaa-86b4-eb406b538e8e","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"04f1db8b-c53d-41d2-a930-e257ee86b8b6","type":"Circle"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"137925fa-01a1-41dc-8b58-6207b402779e","type":"PanTool"},{"attributes":{},"id":"0ebef859-b278-4fd8-85c9-2b4a94c953da","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1247cd1c-9bdc-43e2-ae5d-b199b4923be0","type":"BasicTicker"}},"id":"e6ac6c0b-c725-4682-a167-0174f4c52c82","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"50fb2738-53c3-4d67-a8d0-76fdce72793a","type":"Title"},{"attributes":{"data_source":{"id":"49813d7b-4b2b-4228-85da-cba46946fee6","type":"ColumnDataSource"},"glyph":{"id":"04f1db8b-c53d-41d2-a930-e257ee86b8b6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a02ab069-11d6-4d86-91c9-97db77960318","type":"Circle"},"selection_glyph":null},"id":"cb163c62-005f-4aff-a4fc-a9c0975a7bcd","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7b555868-0c4b-48e8-8ffd-72319e549867","type":"BoxAnnotation"},"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"c7a0a333-736d-41f8-bd1e-50bd94ce5637","type":"BoxZoomTool"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"32351128-55ea-47ed-8868-51bb27a55e3a","type":"BasicTickFormatter"},"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"013e292a-6a83-495e-8c9d-663c35c30cde","type":"BasicTicker"}},"id":"3a057ff7-2037-4a38-88f6-5ccf099ba061","type":"LinearAxis"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"0ebef859-b278-4fd8-85c9-2b4a94c953da","type":"BasicTickFormatter"},"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1247cd1c-9bdc-43e2-ae5d-b199b4923be0","type":"BasicTicker"}},"id":"c27f4147-62a1-437e-8a0a-bd20b168f909","type":"LinearAxis"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"4ae7a059-341e-4cdb-8ef2-86369bb48d36","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"137925fa-01a1-41dc-8b58-6207b402779e","type":"PanTool"},{"id":"4ae7a059-341e-4cdb-8ef2-86369bb48d36","type":"WheelZoomTool"},{"id":"c7a0a333-736d-41f8-bd1e-50bd94ce5637","type":"BoxZoomTool"},{"id":"79bf4eb6-c484-4261-b3d3-8e3b64d2572f","type":"SaveTool"},{"id":"978eaed7-d4ce-4b03-bfd4-9705135dc27a","type":"ResetTool"},{"id":"1a8cf22c-7951-4368-9255-f27a9604c274","type":"HelpTool"}]},"id":"c2cff7e1-d635-4cf1-a757-6d38ef804081","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"},"ticker":{"id":"013e292a-6a83-495e-8c9d-663c35c30cde","type":"BasicTicker"}},"id":"19fd0018-43a7-490d-828d-ddcaa1f763bf","type":"Grid"},{"attributes":{"below":[{"id":"c27f4147-62a1-437e-8a0a-bd20b168f909","type":"LinearAxis"}],"left":[{"id":"3a057ff7-2037-4a38-88f6-5ccf099ba061","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c27f4147-62a1-437e-8a0a-bd20b168f909","type":"LinearAxis"},{"id":"e6ac6c0b-c725-4682-a167-0174f4c52c82","type":"Grid"},{"id":"3a057ff7-2037-4a38-88f6-5ccf099ba061","type":"LinearAxis"},{"id":"19fd0018-43a7-490d-828d-ddcaa1f763bf","type":"Grid"},{"id":"7b555868-0c4b-48e8-8ffd-72319e549867","type":"BoxAnnotation"},{"id":"cb163c62-005f-4aff-a4fc-a9c0975a7bcd","type":"GlyphRenderer"}],"title":{"id":"50fb2738-53c3-4d67-a8d0-76fdce72793a","type":"Title"},"tool_events":{"id":"e551834f-f383-4eaa-86b4-eb406b538e8e","type":"ToolEvents"},"toolbar":{"id":"c2cff7e1-d635-4cf1-a757-6d38ef804081","type":"Toolbar"},"x_range":{"id":"8b310236-98bc-4330-9156-b3b9f632f566","type":"DataRange1d"},"y_range":{"id":"5b8fdb98-f0d0-4e1e-8fd3-7ce08e10e836","type":"DataRange1d"}},"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"8b310236-98bc-4330-9156-b3b9f632f566","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"49813d7b-4b2b-4228-85da-cba46946fee6","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a02ab069-11d6-4d86-91c9-97db77960318","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7b555868-0c4b-48e8-8ffd-72319e549867","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"5b8fdb98-f0d0-4e1e-8fd3-7ce08e10e836","type":"DataRange1d"},{"attributes":{},"id":"32351128-55ea-47ed-8868-51bb27a55e3a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"978eaed7-d4ce-4b03-bfd4-9705135dc27a","type":"ResetTool"},{"attributes":{"plot":{"id":"42e38576-29ad-4e80-a0eb-113261cb58fd","subtype":"Figure","type":"Plot"}},"id":"79bf4eb6-c484-4261-b3d3-8e3b64d2572f","type":"SaveTool"}],"root_ids":["42e38576-29ad-4e80-a0eb-113261cb58fd"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"8768fbd7-5734-4084-a40a-63d061ede78f","elementid":"00997b28-32d5-49cd-bf28-9804230734a2","modelid":"42e38576-29ad-4e80-a0eb-113261cb58fd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
