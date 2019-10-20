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
      };var element = document.getElementById("4d3bdbc7-90c8-4a21-b68d-ffd7126d1c34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d3bdbc7-90c8-4a21-b68d-ffd7126d1c34' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"e6a50eb7-c777-4d2a-b03a-cf19501ef036":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f01ba6e1-8196-4a45-a835-e414a86497b5","type":"BoxAnnotation"},{"attributes":{},"id":"7490560d-0839-4b0d-a7f0-401b75c78451","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5d0085d9-4572-4510-9406-2270df70178e","type":"BoxAnnotation"}},"id":"a58d5f62-dad3-4413-bf1f-2fe6a86e45d6","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},{"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},{"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"}]},"id":"50bf5474-db4f-4f11-809f-f0c748710d17","type":"Row"},{"attributes":{"formatter":{"id":"7490560d-0839-4b0d-a7f0-401b75c78451","type":"BasicTickFormatter"},"plot":{"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe713afb-9285-4ad4-8ed4-f509f239d421","type":"BasicTicker"}},"id":"247ffce4-a569-4cc3-bb96-1623629593fa","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b75769e-24b8-477f-9250-ee7a339055b9","type":"Triangle"},{"attributes":{},"id":"e8503e54-4432-40a0-b94e-c6c947c19412","type":"HelpTool"},{"attributes":{},"id":"e419f753-e177-4b52-a76d-1a3009e38dda","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},"ticker":{"id":"dabae835-2962-4aff-b3e8-1597b5e317f0","type":"BasicTicker"}},"id":"74ca7fd8-73b7-4922-8d94-64e7a55af644","type":"Grid"},{"attributes":{},"id":"fe713afb-9285-4ad4-8ed4-f509f239d421","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe713afb-9285-4ad4-8ed4-f509f239d421","type":"BasicTicker"}},"id":"255b413d-b91c-426e-aeeb-3987b56526a5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7442780-9b31-4328-a342-7d1f136bd0aa","type":"Triangle"},{"attributes":{"overlay":{"id":"f01ba6e1-8196-4a45-a835-e414a86497b5","type":"BoxAnnotation"}},"id":"2e3ddade-44b6-44bd-82bc-df1a92e64199","type":"BoxZoomTool"},{"attributes":{},"id":"0f3e2a42-a1e0-4564-8924-c62eff66f005","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5d0085d9-4572-4510-9406-2270df70178e","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"bb3bd691-4dc3-4262-88c1-ce4aa91089f2","type":"LinearAxis"}],"left":[{"id":"9ed79d45-382d-4c05-9553-1ba2cd35c38f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"bb3bd691-4dc3-4262-88c1-ce4aa91089f2","type":"LinearAxis"},{"id":"1d352d60-4bbc-4e0a-b24b-7ecc7ef5f502","type":"Grid"},{"id":"9ed79d45-382d-4c05-9553-1ba2cd35c38f","type":"LinearAxis"},{"id":"463908ba-7fb9-47ad-b78c-1ec0e46655eb","type":"Grid"},{"id":"ef75a952-cb01-4419-87c6-a8112d43d892","type":"BoxAnnotation"},{"id":"93e9c7fe-36ff-41a8-977b-00cf052ec0ba","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f0483e21-114d-4e4b-9482-5403f25ffb2e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"04ac8efe-7e2e-4cbb-bd4f-db36d4ad82a7","type":"DataRange1d"},"x_scale":{"id":"1c72f668-c3cc-41b4-95c8-87d07da46325","type":"LinearScale"},"y_range":{"id":"8316a8f1-e54a-415e-8bbb-d9669e4a46b7","type":"DataRange1d"},"y_scale":{"id":"7b4a1c3a-002c-475b-b5a1-e4a53d47ab0e","type":"LinearScale"}},"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ec4a44df-43d6-42b8-bc33-a17902cdf008","type":"PanTool"},{"id":"d6433a0c-0f72-41e6-8279-2c736283bfaf","type":"WheelZoomTool"},{"id":"a58d5f62-dad3-4413-bf1f-2fe6a86e45d6","type":"BoxZoomTool"},{"id":"de6e02c8-f18c-4e34-b1e6-e0360f50d10a","type":"SaveTool"},{"id":"ee101603-775c-41ea-bc59-bde2747d9e74","type":"ResetTool"},{"id":"8476f8a1-d688-4390-ab10-6f2f31f9b8fd","type":"HelpTool"}]},"id":"386fe7c0-5674-4869-b4e6-586a9abb2a21","type":"Toolbar"},{"attributes":{"source":{"id":"1adc718e-b6de-4637-a0ed-e0863a96690f","type":"ColumnDataSource"}},"id":"0944a6a2-0d00-4306-a6e2-5fde246517ee","type":"CDSView"},{"attributes":{},"id":"8476f8a1-d688-4390-ab10-6f2f31f9b8fd","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"94471639-40fa-4070-8f00-133f8378d820","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9364ed2d-0ea0-473e-9c1c-1ef9e42a7642","type":"BasicTicker"}},"id":"fc0b7e8b-93c5-4823-accc-a04790e74f5c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ef75a952-cb01-4419-87c6-a8112d43d892","type":"BoxAnnotation"},{"attributes":{"source":{"id":"0667ca1e-67d6-4c99-8c17-2b23b7941b06","type":"ColumnDataSource"}},"id":"306fdc7b-257a-45bf-a462-1aca3b806106","type":"CDSView"},{"attributes":{},"id":"d6433a0c-0f72-41e6-8279-2c736283bfaf","type":"WheelZoomTool"},{"attributes":{},"id":"7db15535-6ee6-4849-8091-aa4bc608d28d","type":"ResetTool"},{"attributes":{},"id":"e4cab1df-a0f4-49d7-a7ac-b8fd656df09c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"1adc718e-b6de-4637-a0ed-e0863a96690f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"674ebee9-2352-4320-9c42-6d15744e7748","type":"Circle"},{"attributes":{"below":[{"id":"ed8ce907-f47b-4835-9ba8-e0657cff5d84","type":"LinearAxis"}],"left":[{"id":"247ffce4-a569-4cc3-bb96-1623629593fa","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ed8ce907-f47b-4835-9ba8-e0657cff5d84","type":"LinearAxis"},{"id":"a3a3655b-e3d4-4bad-af5c-d1dbd6655191","type":"Grid"},{"id":"247ffce4-a569-4cc3-bb96-1623629593fa","type":"LinearAxis"},{"id":"255b413d-b91c-426e-aeeb-3987b56526a5","type":"Grid"},{"id":"f01ba6e1-8196-4a45-a835-e414a86497b5","type":"BoxAnnotation"},{"id":"d74deef8-9c00-4816-ab49-67eb44254802","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"4254c28f-3472-4543-8b58-f33159638c43","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"04ac8efe-7e2e-4cbb-bd4f-db36d4ad82a7","type":"DataRange1d"},"x_scale":{"id":"8c1064c1-9015-4750-941d-b9b395a4840c","type":"LinearScale"},"y_range":{"id":"c465f41c-c6f7-4853-abf3-f131afd4b311","type":"DataRange1d"},"y_scale":{"id":"e803d58e-fe57-4f6f-905b-8cc197c144ae","type":"LinearScale"}},"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6e1223a5-9fb1-4d3c-be81-f21784894dcb","type":"SaveTool"},{"attributes":{"children":[{"id":"50bf5474-db4f-4f11-809f-f0c748710d17","type":"Row"}]},"id":"e1a27617-e70c-47c8-bbc4-7a056e7db9b0","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ce22f949-4e0e-4a30-9a2e-5f00bbf78cda","type":"PanTool"},{"id":"6259de98-990e-4031-b9a6-8e76100dce53","type":"WheelZoomTool"},{"id":"9a949776-1f22-4409-9d24-40884a35a351","type":"BoxZoomTool"},{"id":"6e1223a5-9fb1-4d3c-be81-f21784894dcb","type":"SaveTool"},{"id":"7db15535-6ee6-4849-8091-aa4bc608d28d","type":"ResetTool"},{"id":"61a74b0c-7476-4c06-85e3-fc81879a84d6","type":"HelpTool"}]},"id":"f0483e21-114d-4e4b-9482-5403f25ffb2e","type":"Toolbar"},{"attributes":{},"id":"de6e02c8-f18c-4e34-b1e6-e0360f50d10a","type":"SaveTool"},{"attributes":{},"id":"2ad2af4a-8bf8-4c51-8002-f0674d4c80d7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2ad2af4a-8bf8-4c51-8002-f0674d4c80d7","type":"BasicTickFormatter"},"plot":{"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a295c56-4d2e-449f-b2ff-8eafa081aefd","type":"BasicTicker"}},"id":"9ed79d45-382d-4c05-9553-1ba2cd35c38f","type":"LinearAxis"},{"attributes":{},"id":"dabae835-2962-4aff-b3e8-1597b5e317f0","type":"BasicTicker"},{"attributes":{},"id":"1e7efb24-f0f7-41e6-b362-ef849e7d6634","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"15885fff-ab11-4a0a-9132-a6b15f62f89e","type":"ColumnDataSource"}},"id":"7dbac340-ed60-4fce-b995-4523ab330d15","type":"CDSView"},{"attributes":{"data_source":{"id":"1adc718e-b6de-4637-a0ed-e0863a96690f","type":"ColumnDataSource"},"glyph":{"id":"f2b1059b-2560-40d2-bc61-ba515ff4965a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"674ebee9-2352-4320-9c42-6d15744e7748","type":"Circle"},"selection_glyph":null,"view":{"id":"0944a6a2-0d00-4306-a6e2-5fde246517ee","type":"CDSView"}},"id":"d74deef8-9c00-4816-ab49-67eb44254802","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0f3e2a42-a1e0-4564-8924-c62eff66f005","type":"BasicTickFormatter"},"plot":{"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},"ticker":{"id":"dabae835-2962-4aff-b3e8-1597b5e317f0","type":"BasicTicker"}},"id":"92671620-6cb2-4bef-aaec-2459e0b96140","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"0667ca1e-67d6-4c99-8c17-2b23b7941b06","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"92671620-6cb2-4bef-aaec-2459e0b96140","type":"LinearAxis"}],"left":[{"id":"5578252e-ae1d-46de-8b1b-cb40fd85cfab","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"92671620-6cb2-4bef-aaec-2459e0b96140","type":"LinearAxis"},{"id":"74ca7fd8-73b7-4922-8d94-64e7a55af644","type":"Grid"},{"id":"5578252e-ae1d-46de-8b1b-cb40fd85cfab","type":"LinearAxis"},{"id":"fc0b7e8b-93c5-4823-accc-a04790e74f5c","type":"Grid"},{"id":"5d0085d9-4572-4510-9406-2270df70178e","type":"BoxAnnotation"},{"id":"43062e23-a0e1-4cec-a341-84189581d1ef","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"386fe7c0-5674-4869-b4e6-586a9abb2a21","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"04ac8efe-7e2e-4cbb-bd4f-db36d4ad82a7","type":"DataRange1d"},"x_scale":{"id":"9493ef11-bbdf-4505-965a-04baa99c173f","type":"LinearScale"},"y_range":{"id":"c465f41c-c6f7-4853-abf3-f131afd4b311","type":"DataRange1d"},"y_scale":{"id":"990caa18-b450-4544-ad1a-847892e5741d","type":"LinearScale"}},"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"15885fff-ab11-4a0a-9132-a6b15f62f89e","type":"ColumnDataSource"},"glyph":{"id":"0370d866-f18c-447d-af24-80bf64339927","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94471639-40fa-4070-8f00-133f8378d820","type":"Square"},"selection_glyph":null,"view":{"id":"7dbac340-ed60-4fce-b995-4523ab330d15","type":"CDSView"}},"id":"93e9c7fe-36ff-41a8-977b-00cf052ec0ba","type":"GlyphRenderer"},{"attributes":{},"id":"ee101603-775c-41ea-bc59-bde2747d9e74","type":"ResetTool"},{"attributes":{"formatter":{"id":"1e7efb24-f0f7-41e6-b362-ef849e7d6634","type":"BasicTickFormatter"},"plot":{"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1cc936a9-45c8-4f26-9806-30170e8fe026","type":"BasicTicker"}},"id":"bb3bd691-4dc3-4262-88c1-ce4aa91089f2","type":"LinearAxis"},{"attributes":{},"id":"ec4a44df-43d6-42b8-bc33-a17902cdf008","type":"PanTool"},{"attributes":{},"id":"9364ed2d-0ea0-473e-9c1c-1ef9e42a7642","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0370d866-f18c-447d-af24-80bf64339927","type":"Square"},{"attributes":{"data_source":{"id":"0667ca1e-67d6-4c99-8c17-2b23b7941b06","type":"ColumnDataSource"},"glyph":{"id":"d7442780-9b31-4328-a342-7d1f136bd0aa","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b75769e-24b8-477f-9250-ee7a339055b9","type":"Triangle"},"selection_glyph":null,"view":{"id":"306fdc7b-257a-45bf-a462-1aca3b806106","type":"CDSView"}},"id":"43062e23-a0e1-4cec-a341-84189581d1ef","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e4cab1df-a0f4-49d7-a7ac-b8fd656df09c","type":"BasicTickFormatter"},"plot":{"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd100acb-6dc4-478f-8861-eba2566b3ba9","type":"BasicTicker"}},"id":"ed8ce907-f47b-4835-9ba8-e0657cff5d84","type":"LinearAxis"},{"attributes":{},"id":"ce22f949-4e0e-4a30-9a2e-5f00bbf78cda","type":"PanTool"},{"attributes":{"callback":null},"id":"c465f41c-c6f7-4853-abf3-f131afd4b311","type":"DataRange1d"},{"attributes":{},"id":"88c6e715-bd2f-4649-bc01-cc0984500b01","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"15885fff-ab11-4a0a-9132-a6b15f62f89e","type":"ColumnDataSource"},{"attributes":{},"id":"2f8ce804-b557-4eff-bf86-e43d7cc28b84","type":"PanTool"},{"attributes":{},"id":"8840cba0-cae0-4124-9f25-e690ef5edf2b","type":"SaveTool"},{"attributes":{},"id":"3a295c56-4d2e-449f-b2ff-8eafa081aefd","type":"BasicTicker"},{"attributes":{},"id":"e803d58e-fe57-4f6f-905b-8cc197c144ae","type":"LinearScale"},{"attributes":{},"id":"61a74b0c-7476-4c06-85e3-fc81879a84d6","type":"HelpTool"},{"attributes":{},"id":"8c1064c1-9015-4750-941d-b9b395a4840c","type":"LinearScale"},{"attributes":{},"id":"1c72f668-c3cc-41b4-95c8-87d07da46325","type":"LinearScale"},{"attributes":{"overlay":{"id":"ef75a952-cb01-4419-87c6-a8112d43d892","type":"BoxAnnotation"}},"id":"9a949776-1f22-4409-9d24-40884a35a351","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2f8ce804-b557-4eff-bf86-e43d7cc28b84","type":"PanTool"},{"id":"88c6e715-bd2f-4649-bc01-cc0984500b01","type":"WheelZoomTool"},{"id":"2e3ddade-44b6-44bd-82bc-df1a92e64199","type":"BoxZoomTool"},{"id":"8840cba0-cae0-4124-9f25-e690ef5edf2b","type":"SaveTool"},{"id":"8026f672-2a34-4e22-8a00-eec62803ee30","type":"ResetTool"},{"id":"e8503e54-4432-40a0-b94e-c6c947c19412","type":"HelpTool"}]},"id":"4254c28f-3472-4543-8b58-f33159638c43","type":"Toolbar"},{"attributes":{},"id":"990caa18-b450-4544-ad1a-847892e5741d","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a295c56-4d2e-449f-b2ff-8eafa081aefd","type":"BasicTicker"}},"id":"463908ba-7fb9-47ad-b78c-1ec0e46655eb","type":"Grid"},{"attributes":{"formatter":{"id":"e419f753-e177-4b52-a76d-1a3009e38dda","type":"BasicTickFormatter"},"plot":{"id":"bfbb1bb9-e9b5-4102-b4c1-c3bc36e2c85d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9364ed2d-0ea0-473e-9c1c-1ef9e42a7642","type":"BasicTicker"}},"id":"5578252e-ae1d-46de-8b1b-cb40fd85cfab","type":"LinearAxis"},{"attributes":{"plot":{"id":"710bf8c3-e7a0-4891-bf6e-635afe9d5779","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd100acb-6dc4-478f-8861-eba2566b3ba9","type":"BasicTicker"}},"id":"a3a3655b-e3d4-4bad-af5c-d1dbd6655191","type":"Grid"},{"attributes":{},"id":"6259de98-990e-4031-b9a6-8e76100dce53","type":"WheelZoomTool"},{"attributes":{},"id":"cd100acb-6dc4-478f-8861-eba2566b3ba9","type":"BasicTicker"},{"attributes":{},"id":"7b4a1c3a-002c-475b-b5a1-e4a53d47ab0e","type":"LinearScale"},{"attributes":{},"id":"9493ef11-bbdf-4505-965a-04baa99c173f","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2b1059b-2560-40d2-bc61-ba515ff4965a","type":"Circle"},{"attributes":{},"id":"8026f672-2a34-4e22-8a00-eec62803ee30","type":"ResetTool"},{"attributes":{"plot":{"id":"2c13ee38-811a-453b-a0d2-a81fdc96a1a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1cc936a9-45c8-4f26-9806-30170e8fe026","type":"BasicTicker"}},"id":"1d352d60-4bbc-4e0a-b24b-7ecc7ef5f502","type":"Grid"},{"attributes":{"callback":null},"id":"04ac8efe-7e2e-4cbb-bd4f-db36d4ad82a7","type":"DataRange1d"},{"attributes":{},"id":"1cc936a9-45c8-4f26-9806-30170e8fe026","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8316a8f1-e54a-415e-8bbb-d9669e4a46b7","type":"DataRange1d"}],"root_ids":["e1a27617-e70c-47c8-bbc4-7a056e7db9b0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e6a50eb7-c777-4d2a-b03a-cf19501ef036","elementid":"4d3bdbc7-90c8-4a21-b68d-ffd7126d1c34","modelid":"e1a27617-e70c-47c8-bbc4-7a056e7db9b0"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
