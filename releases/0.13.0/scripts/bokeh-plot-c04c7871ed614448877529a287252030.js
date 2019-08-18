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
      };var element = document.getElementById("81176620-83a9-446d-9cb7-4747922083b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '81176620-83a9-446d-9cb7-4747922083b2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0f7d97ef-72d5-40d2-80e2-4c9a58dfe6d6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8e91de78-88de-4ac5-9af2-40b447e0f210","type":"BoxAnnotation"},{"attributes":{},"id":"85759dc6-6d1f-4aa4-8a72-f26e555a48b0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8e91de78-88de-4ac5-9af2-40b447e0f210","type":"BoxAnnotation"}},"id":"b48793ad-0133-453a-ab31-adbf3da837b4","type":"BoxZoomTool"},{"attributes":{},"id":"3ddf9011-4142-491c-a4ad-ac2371e09a77","type":"SaveTool"},{"attributes":{},"id":"13d6923b-54ae-4afa-aa7b-a23bb8b9b157","type":"ResetTool"},{"attributes":{"formatter":{"id":"78852e75-fb44-4521-bca5-fb8fb4d9de2e","type":"BasicTickFormatter"},"plot":{"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"},"ticker":{"id":"431455b8-4350-4217-85ca-318ad452a012","type":"BasicTicker"}},"id":"2b4df2bb-2ce7-4bc3-ae23-b7702b9d702c","type":"LinearAxis"},{"attributes":{},"id":"2cb8476f-a585-48db-b130-7c48788dd1e9","type":"HelpTool"},{"attributes":{},"id":"3cc905f4-63e5-44ff-90e4-e629170eb8bb","type":"PanTool"},{"attributes":{},"id":"bd4ab961-742e-4c82-8eb8-68ec06d8cf96","type":"Selection"},{"attributes":{"children":[{"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},{"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},{"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"}]},"id":"fa6b2804-b03f-4cae-be53-c2fea77dd5ab","type":"Row"},{"attributes":{},"id":"60d48d06-a997-4291-b52e-d892161604c8","type":"BasicTickFormatter"},{"attributes":{},"id":"9462b592-9f80-43c9-8786-c71e1669cb6f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3b86298e-dd79-48a8-a77d-0b3a88e19228","type":"ColumnDataSource"},"glyph":{"id":"146b9a8c-11ac-4ff0-950c-9baf84455e8b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1b257e7f-8691-4bea-8294-ff3290d8e15f","type":"Circle"},"selection_glyph":null,"view":{"id":"a3525aef-1f07-4a97-8f43-3e82f61bab92","type":"CDSView"}},"id":"0ea63737-9b69-4503-951f-3f5d3e253fc1","type":"GlyphRenderer"},{"attributes":{},"id":"e36f4339-1f1b-4038-8c62-b5b9a1eab55d","type":"Selection"},{"attributes":{"below":[{"id":"5f762264-3459-4c61-9607-806504f427e7","type":"LinearAxis"}],"left":[{"id":"40552ebf-9d67-48b6-9e7d-dce4701eba19","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"5f762264-3459-4c61-9607-806504f427e7","type":"LinearAxis"},{"id":"c0bd1374-67cc-4438-838c-533226c6515f","type":"Grid"},{"id":"40552ebf-9d67-48b6-9e7d-dce4701eba19","type":"LinearAxis"},{"id":"8ad00232-cf7e-429b-ba73-1fbd46dff217","type":"Grid"},{"id":"8ea72367-d2bf-4545-8ba6-3edbda4832ad","type":"BoxAnnotation"},{"id":"0ea63737-9b69-4503-951f-3f5d3e253fc1","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8e41eb4b-d82a-47c3-89a0-19d64d5d49d4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ef4b36b-8be9-4619-9cb0-71b4539f15a9","type":"DataRange1d"},"x_scale":{"id":"df43daad-b5e8-4e9e-946f-a811a2da79ff","type":"LinearScale"},"y_range":{"id":"17d55c37-d35f-46ee-a825-20d4594010f2","type":"DataRange1d"},"y_scale":{"id":"c1dee354-f7b1-42d6-8a71-bf9667925b0a","type":"LinearScale"}},"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"055c4b0d-4aa8-42db-ba60-e5b050f39e5b","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6f67ae2-41c9-4eb5-86f0-0b09d2ee6d35","type":"PanTool"},{"id":"9af4c52b-98a6-4baf-8db8-53d66f9531dd","type":"WheelZoomTool"},{"id":"a0ea15bc-1c8d-4aad-90ba-1b1643f4f8f6","type":"BoxZoomTool"},{"id":"20aed8e8-eba5-4550-b29f-d1c25361cc70","type":"SaveTool"},{"id":"11a92bdd-c038-4e6e-8b8d-1a14428fb160","type":"ResetTool"},{"id":"05abd287-b815-4c08-a791-e6e4a992510f","type":"HelpTool"}]},"id":"8e41eb4b-d82a-47c3-89a0-19d64d5d49d4","type":"Toolbar"},{"attributes":{},"id":"975a99a6-7481-4c75-b406-182fca83dfed","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8ef4b36b-8be9-4619-9cb0-71b4539f15a9","type":"DataRange1d"},{"attributes":{},"id":"5e0e073b-b5ec-4312-854d-f6bfcf9ee5a1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"146b9a8c-11ac-4ff0-950c-9baf84455e8b","type":"Circle"},{"attributes":{},"id":"55a649ac-8d58-470e-bb98-60a6ea980f33","type":"Selection"},{"attributes":{},"id":"df43daad-b5e8-4e9e-946f-a811a2da79ff","type":"LinearScale"},{"attributes":{},"id":"30b1c683-72b4-4ce3-b371-55f57e54fa87","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17d55c37-d35f-46ee-a825-20d4594010f2","type":"DataRange1d"},{"attributes":{},"id":"ca90dce7-679e-438f-85d1-4ab7593d9980","type":"BasicTickFormatter"},{"attributes":{},"id":"c1dee354-f7b1-42d6-8a71-bf9667925b0a","type":"LinearScale"},{"attributes":{},"id":"78852e75-fb44-4521-bca5-fb8fb4d9de2e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"60d48d06-a997-4291-b52e-d892161604c8","type":"BasicTickFormatter"},"plot":{"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},"ticker":{"id":"197fac0b-d8ea-400c-a2c7-357ad1a35062","type":"BasicTicker"}},"id":"5f762264-3459-4c61-9607-806504f427e7","type":"LinearAxis"},{"attributes":{"plot":{"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},"ticker":{"id":"197fac0b-d8ea-400c-a2c7-357ad1a35062","type":"BasicTicker"}},"id":"c0bd1374-67cc-4438-838c-533226c6515f","type":"Grid"},{"attributes":{},"id":"e4d96db4-4806-47f6-a09a-d190050f9a8a","type":"UnionRenderers"},{"attributes":{},"id":"197fac0b-d8ea-400c-a2c7-357ad1a35062","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"e36f4339-1f1b-4038-8c62-b5b9a1eab55d","type":"Selection"},"selection_policy":{"id":"055c4b0d-4aa8-42db-ba60-e5b050f39e5b","type":"UnionRenderers"}},"id":"3b86298e-dd79-48a8-a77d-0b3a88e19228","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9462b592-9f80-43c9-8786-c71e1669cb6f","type":"BasicTickFormatter"},"plot":{"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},"ticker":{"id":"526dd219-ffdb-4fc8-b582-520b41300cf5","type":"BasicTicker"}},"id":"40552ebf-9d67-48b6-9e7d-dce4701eba19","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1ea2d0f0-a7ec-4dff-97ee-32c74213bcf2","type":"ColumnDataSource"},"glyph":{"id":"bbeb0141-a018-4ed3-b403-2845a21dca33","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5cd2eb35-96b9-4e5f-bab8-0f914ff52224","type":"Triangle"},"selection_glyph":null,"view":{"id":"77ae842c-3a0c-4dc6-ba79-dc7ad705769d","type":"CDSView"}},"id":"bc3bd992-097f-427b-ba0d-4ec1743d2b02","type":"GlyphRenderer"},{"attributes":{},"id":"526dd219-ffdb-4fc8-b582-520b41300cf5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b257e7f-8691-4bea-8294-ff3290d8e15f","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"14c3b1b0-097e-4108-93e1-4e56cb29ac25","subtype":"Figure","type":"Plot"},"ticker":{"id":"526dd219-ffdb-4fc8-b582-520b41300cf5","type":"BasicTicker"}},"id":"8ad00232-cf7e-429b-ba73-1fbd46dff217","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ea72367-d2bf-4545-8ba6-3edbda4832ad","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3b86298e-dd79-48a8-a77d-0b3a88e19228","type":"ColumnDataSource"}},"id":"a3525aef-1f07-4a97-8f43-3e82f61bab92","type":"CDSView"},{"attributes":{},"id":"f6f67ae2-41c9-4eb5-86f0-0b09d2ee6d35","type":"PanTool"},{"attributes":{},"id":"9af4c52b-98a6-4baf-8db8-53d66f9531dd","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbeb0141-a018-4ed3-b403-2845a21dca33","type":"Triangle"},{"attributes":{"overlay":{"id":"8ea72367-d2bf-4545-8ba6-3edbda4832ad","type":"BoxAnnotation"}},"id":"a0ea15bc-1c8d-4aad-90ba-1b1643f4f8f6","type":"BoxZoomTool"},{"attributes":{},"id":"14776278-1307-48a2-8644-4a3c7df3b2c7","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"84902465-b851-4bbf-aa0c-888ecccf8165","type":"PanTool"},{"id":"b28a9168-192e-42c4-b03f-ea57eea111c6","type":"WheelZoomTool"},{"id":"54c4604b-94c9-418d-8d5a-01ebe039bef3","type":"BoxZoomTool"},{"id":"922512c2-a030-49a5-b0ce-de3516bec249","type":"SaveTool"},{"id":"1df8e258-7817-4929-8b0e-3128fddde03b","type":"ResetTool"},{"id":"988511a6-e4f8-4ac9-b0e5-079715449cac","type":"HelpTool"}]},"id":"034b24a0-c927-4899-8143-33d9cb397f87","type":"Toolbar"},{"attributes":{"below":[{"id":"2336eed6-e455-4996-8d98-db4a9af22c97","type":"LinearAxis"}],"left":[{"id":"2d1f27e0-059f-4853-89ed-8b3c40e6c7a1","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2336eed6-e455-4996-8d98-db4a9af22c97","type":"LinearAxis"},{"id":"72290bd7-b5c8-4a2a-a085-d79ce9821cff","type":"Grid"},{"id":"2d1f27e0-059f-4853-89ed-8b3c40e6c7a1","type":"LinearAxis"},{"id":"f22f03ff-21ac-4009-8feb-a38fe9585f38","type":"Grid"},{"id":"95f65abf-27aa-4d74-8bd4-3fbd14189fa1","type":"BoxAnnotation"},{"id":"bc3bd992-097f-427b-ba0d-4ec1743d2b02","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"034b24a0-c927-4899-8143-33d9cb397f87","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ef4b36b-8be9-4619-9cb0-71b4539f15a9","type":"DataRange1d"},"x_scale":{"id":"14776278-1307-48a2-8644-4a3c7df3b2c7","type":"LinearScale"},"y_range":{"id":"17d55c37-d35f-46ee-a825-20d4594010f2","type":"DataRange1d"},"y_scale":{"id":"1a020cd7-e00a-427e-928f-9658bca2b692","type":"LinearScale"}},"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20aed8e8-eba5-4550-b29f-d1c25361cc70","type":"SaveTool"},{"attributes":{},"id":"05abd287-b815-4c08-a791-e6e4a992510f","type":"HelpTool"},{"attributes":{},"id":"11a92bdd-c038-4e6e-8b8d-1a14428fb160","type":"ResetTool"},{"attributes":{"plot":{"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bce3343-5300-4e75-bea8-6c6df5f19f06","type":"BasicTicker"}},"id":"72290bd7-b5c8-4a2a-a085-d79ce9821cff","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95f65abf-27aa-4d74-8bd4-3fbd14189fa1","type":"BoxAnnotation"},{"attributes":{},"id":"1a020cd7-e00a-427e-928f-9658bca2b692","type":"LinearScale"},{"attributes":{},"id":"d62285c4-0430-466a-8d3d-a22287178162","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"bd4ab961-742e-4c82-8eb8-68ec06d8cf96","type":"Selection"},"selection_policy":{"id":"30b1c683-72b4-4ce3-b371-55f57e54fa87","type":"UnionRenderers"}},"id":"1ea2d0f0-a7ec-4dff-97ee-32c74213bcf2","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},"ticker":{"id":"d62285c4-0430-466a-8d3d-a22287178162","type":"BasicTicker"}},"id":"f22f03ff-21ac-4009-8feb-a38fe9585f38","type":"Grid"},{"attributes":{"data_source":{"id":"d54cb6f2-c100-4a8c-8571-f6013104e74a","type":"ColumnDataSource"},"glyph":{"id":"2f14e8a4-aa72-4032-b48c-4351c6e2f343","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0c875c5f-76f7-4cb3-9700-420cb680568e","type":"Square"},"selection_glyph":null,"view":{"id":"9d954976-6dc5-4320-9c72-7c1b6e8b5c84","type":"CDSView"}},"id":"130159e5-0d9c-42e9-b37f-7f9007d8db50","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cd2eb35-96b9-4e5f-bab8-0f914ff52224","type":"Triangle"},{"attributes":{"formatter":{"id":"975a99a6-7481-4c75-b406-182fca83dfed","type":"BasicTickFormatter"},"plot":{"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bce3343-5300-4e75-bea8-6c6df5f19f06","type":"BasicTicker"}},"id":"2336eed6-e455-4996-8d98-db4a9af22c97","type":"LinearAxis"},{"attributes":{"formatter":{"id":"5e0e073b-b5ec-4312-854d-f6bfcf9ee5a1","type":"BasicTickFormatter"},"plot":{"id":"5e753740-3724-42a9-ae85-9bf8b3cd1554","subtype":"Figure","type":"Plot"},"ticker":{"id":"d62285c4-0430-466a-8d3d-a22287178162","type":"BasicTicker"}},"id":"2d1f27e0-059f-4853-89ed-8b3c40e6c7a1","type":"LinearAxis"},{"attributes":{},"id":"5bce3343-5300-4e75-bea8-6c6df5f19f06","type":"BasicTicker"},{"attributes":{},"id":"84902465-b851-4bbf-aa0c-888ecccf8165","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3cc905f4-63e5-44ff-90e4-e629170eb8bb","type":"PanTool"},{"id":"85759dc6-6d1f-4aa4-8a72-f26e555a48b0","type":"WheelZoomTool"},{"id":"b48793ad-0133-453a-ab31-adbf3da837b4","type":"BoxZoomTool"},{"id":"3ddf9011-4142-491c-a4ad-ac2371e09a77","type":"SaveTool"},{"id":"13d6923b-54ae-4afa-aa7b-a23bb8b9b157","type":"ResetTool"},{"id":"2cb8476f-a585-48db-b130-7c48788dd1e9","type":"HelpTool"}]},"id":"de8b1daf-9123-45a2-b427-fca839d59fce","type":"Toolbar"},{"attributes":{"source":{"id":"1ea2d0f0-a7ec-4dff-97ee-32c74213bcf2","type":"ColumnDataSource"}},"id":"77ae842c-3a0c-4dc6-ba79-dc7ad705769d","type":"CDSView"},{"attributes":{"below":[{"id":"354a963c-9f83-4b89-8546-92e3eeb033da","type":"LinearAxis"}],"left":[{"id":"2b4df2bb-2ce7-4bc3-ae23-b7702b9d702c","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"354a963c-9f83-4b89-8546-92e3eeb033da","type":"LinearAxis"},{"id":"5ca66387-609a-4da3-bc45-a56a57c4a083","type":"Grid"},{"id":"2b4df2bb-2ce7-4bc3-ae23-b7702b9d702c","type":"LinearAxis"},{"id":"ce0584dc-8b77-4a57-8b75-83409e88df4e","type":"Grid"},{"id":"8e91de78-88de-4ac5-9af2-40b447e0f210","type":"BoxAnnotation"},{"id":"130159e5-0d9c-42e9-b37f-7f9007d8db50","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"de8b1daf-9123-45a2-b427-fca839d59fce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ef4b36b-8be9-4619-9cb0-71b4539f15a9","type":"DataRange1d"},"x_scale":{"id":"7659f1c7-4c3b-441f-b76c-746337279007","type":"LinearScale"},"y_range":{"id":"d8a46443-43bc-4ff5-a19d-7b4e71b33f28","type":"DataRange1d"},"y_scale":{"id":"cbd2c7ef-1a88-48da-b05b-478637137895","type":"LinearScale"}},"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b28a9168-192e-42c4-b03f-ea57eea111c6","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"95f65abf-27aa-4d74-8bd4-3fbd14189fa1","type":"BoxAnnotation"}},"id":"54c4604b-94c9-418d-8d5a-01ebe039bef3","type":"BoxZoomTool"},{"attributes":{},"id":"922512c2-a030-49a5-b0ce-de3516bec249","type":"SaveTool"},{"attributes":{},"id":"1df8e258-7817-4929-8b0e-3128fddde03b","type":"ResetTool"},{"attributes":{},"id":"988511a6-e4f8-4ac9-b0e5-079715449cac","type":"HelpTool"},{"attributes":{"callback":null},"id":"d8a46443-43bc-4ff5-a19d-7b4e71b33f28","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f14e8a4-aa72-4032-b48c-4351c6e2f343","type":"Square"},{"attributes":{},"id":"cbd2c7ef-1a88-48da-b05b-478637137895","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"55a649ac-8d58-470e-bb98-60a6ea980f33","type":"Selection"},"selection_policy":{"id":"e4d96db4-4806-47f6-a09a-d190050f9a8a","type":"UnionRenderers"}},"id":"d54cb6f2-c100-4a8c-8571-f6013104e74a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"d54cb6f2-c100-4a8c-8571-f6013104e74a","type":"ColumnDataSource"}},"id":"9d954976-6dc5-4320-9c72-7c1b6e8b5c84","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c875c5f-76f7-4cb3-9700-420cb680568e","type":"Square"},{"attributes":{"children":[{"id":"fa6b2804-b03f-4cae-be53-c2fea77dd5ab","type":"Row"}]},"id":"1374b68c-3cb7-45d4-af67-3cacbe6fcc6a","type":"Column"},{"attributes":{},"id":"7659f1c7-4c3b-441f-b76c-746337279007","type":"LinearScale"},{"attributes":{"plot":{"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab141484-8804-4881-9cd8-4990f9cf2b20","type":"BasicTicker"}},"id":"5ca66387-609a-4da3-bc45-a56a57c4a083","type":"Grid"},{"attributes":{"formatter":{"id":"ca90dce7-679e-438f-85d1-4ab7593d9980","type":"BasicTickFormatter"},"plot":{"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab141484-8804-4881-9cd8-4990f9cf2b20","type":"BasicTicker"}},"id":"354a963c-9f83-4b89-8546-92e3eeb033da","type":"LinearAxis"},{"attributes":{},"id":"ab141484-8804-4881-9cd8-4990f9cf2b20","type":"BasicTicker"},{"attributes":{},"id":"431455b8-4350-4217-85ca-318ad452a012","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6bf8863d-04ec-4c28-8d5a-39a80dd38413","subtype":"Figure","type":"Plot"},"ticker":{"id":"431455b8-4350-4217-85ca-318ad452a012","type":"BasicTicker"}},"id":"ce0584dc-8b77-4a57-8b75-83409e88df4e","type":"Grid"}],"root_ids":["1374b68c-3cb7-45d4-af67-3cacbe6fcc6a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0f7d97ef-72d5-40d2-80e2-4c9a58dfe6d6","roots":{"1374b68c-3cb7-45d4-af67-3cacbe6fcc6a":"81176620-83a9-446d-9cb7-4747922083b2"}}];
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