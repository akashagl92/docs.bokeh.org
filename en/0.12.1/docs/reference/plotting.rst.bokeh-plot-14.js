document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("a2c9ec2a-6c5d-4972-911e-99eb2b0231de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2c9ec2a-6c5d-4972-911e-99eb2b0231de' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"88df07fa-1cb1-44dc-a7d3-8e52b0c09db4":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15b4659c-7cea-4606-bf43-44827253a1de","type":"Patch"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"e9f078de-0647-40cc-b28b-8103eba0dcb2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1b41c51-f0ad-4db4-b93b-8e9133595977","type":"BasicTicker"}},"id":"9dd821ce-0cf5-4153-87fb-f99e4ebf54a4","type":"Grid"},{"attributes":{"overlay":{"id":"9c6324b1-eacc-450d-8236-c77d5a9aca30","type":"BoxAnnotation"},"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"5763a495-837d-4840-852c-be326ac26733","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"252306d2-e285-4b39-a725-eaacece731e4","type":"ResetTool"},{"attributes":{"callback":null},"id":"24c7ab9b-4341-4caa-94eb-72eb801c1bb6","type":"DataRange1d"},{"attributes":{},"id":"aee17638-15a6-4798-9e7a-78e43f230e16","type":"BasicTickFormatter"},{"attributes":{},"id":"a0ea97cd-268d-4172-9314-0fcba665ac97","type":"BasicTicker"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"66bd3bf5-9686-4342-af1c-10b24536abe3","type":"HelpTool"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"af084834-3368-41ca-8d48-612b0ceb002f","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ea97cd-268d-4172-9314-0fcba665ac97","type":"BasicTicker"}},"id":"eb5cdd86-6262-4ccf-9579-54a3fbec137f","type":"Grid"},{"attributes":{},"id":"98ed7716-6399-4607-8d31-d028149fd0a7","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"15673258-7ca7-43a4-b4d1-f1f3a053d7bd","type":"Title"},{"attributes":{"formatter":{"id":"e931a11c-1d5f-489c-a635-dfbb3ac5d740","type":"BasicTickFormatter"},"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ea97cd-268d-4172-9314-0fcba665ac97","type":"BasicTicker"}},"id":"07e2acc2-ea18-4c0f-a7ab-d641d6052de3","type":"LinearAxis"},{"attributes":{"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}},"id":"a6fc5d97-cd9a-4856-9f6f-2e8cdf112c74","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a6fc5d97-cd9a-4856-9f6f-2e8cdf112c74","type":"PanTool"},{"id":"e9f078de-0647-40cc-b28b-8103eba0dcb2","type":"WheelZoomTool"},{"id":"5763a495-837d-4840-852c-be326ac26733","type":"BoxZoomTool"},{"id":"af084834-3368-41ca-8d48-612b0ceb002f","type":"SaveTool"},{"id":"252306d2-e285-4b39-a725-eaacece731e4","type":"ResetTool"},{"id":"66bd3bf5-9686-4342-af1c-10b24536abe3","type":"HelpTool"}]},"id":"e23ea87b-6a0c-4b20-b6a3-134d81ea5382","type":"Toolbar"},{"attributes":{"formatter":{"id":"aee17638-15a6-4798-9e7a-78e43f230e16","type":"BasicTickFormatter"},"plot":{"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1b41c51-f0ad-4db4-b93b-8e9133595977","type":"BasicTicker"}},"id":"c80ad644-615e-46af-9d58-77c4e73e8484","type":"LinearAxis"},{"attributes":{},"id":"e931a11c-1d5f-489c-a635-dfbb3ac5d740","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"632455c5-3697-465c-8ac5-976afb805a6e","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"40103dd5-3140-4a35-90be-3dce9980828c","type":"Patch"},{"attributes":{},"id":"e1b41c51-f0ad-4db4-b93b-8e9133595977","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"5883e56c-4a85-41a6-b444-634b9c81f8b5","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c6324b1-eacc-450d-8236-c77d5a9aca30","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"5883e56c-4a85-41a6-b444-634b9c81f8b5","type":"ColumnDataSource"},"glyph":{"id":"15b4659c-7cea-4606-bf43-44827253a1de","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"40103dd5-3140-4a35-90be-3dce9980828c","type":"Patch"},"selection_glyph":null},"id":"ddd1b449-8322-476f-a55a-5b5cdd04e885","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c80ad644-615e-46af-9d58-77c4e73e8484","type":"LinearAxis"}],"left":[{"id":"07e2acc2-ea18-4c0f-a7ab-d641d6052de3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c80ad644-615e-46af-9d58-77c4e73e8484","type":"LinearAxis"},{"id":"9dd821ce-0cf5-4153-87fb-f99e4ebf54a4","type":"Grid"},{"id":"07e2acc2-ea18-4c0f-a7ab-d641d6052de3","type":"LinearAxis"},{"id":"eb5cdd86-6262-4ccf-9579-54a3fbec137f","type":"Grid"},{"id":"9c6324b1-eacc-450d-8236-c77d5a9aca30","type":"BoxAnnotation"},{"id":"ddd1b449-8322-476f-a55a-5b5cdd04e885","type":"GlyphRenderer"}],"title":{"id":"15673258-7ca7-43a4-b4d1-f1f3a053d7bd","type":"Title"},"tool_events":{"id":"98ed7716-6399-4607-8d31-d028149fd0a7","type":"ToolEvents"},"toolbar":{"id":"e23ea87b-6a0c-4b20-b6a3-134d81ea5382","type":"Toolbar"},"x_range":{"id":"632455c5-3697-465c-8ac5-976afb805a6e","type":"DataRange1d"},"y_range":{"id":"24c7ab9b-4341-4caa-94eb-72eb801c1bb6","type":"DataRange1d"}},"id":"573b3e58-be92-4575-a42e-01795a0d7bd2","subtype":"Figure","type":"Plot"}],"root_ids":["573b3e58-be92-4575-a42e-01795a0d7bd2"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"88df07fa-1cb1-44dc-a7d3-8e52b0c09db4","elementid":"a2c9ec2a-6c5d-4972-911e-99eb2b0231de","modelid":"573b3e58-be92-4575-a42e-01795a0d7bd2"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});