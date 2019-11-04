
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("079a3926-1548-4aed-a883-45313ba04118");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '079a3926-1548-4aed-a883-45313ba04118' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a01472d4-18ec-454d-b386-365827fe2326":{"roots":{"references":[{"attributes":{"data_source":{"id":"f4407ab6-7684-45d3-bc51-da9dcc099dec","type":"ColumnDataSource"},"glyph":{"id":"63ad3575-7e87-4d19-9501-e8c25af4769c","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bc4242a8-b828-433b-9b62-a26e1ff27530","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"},"ticker":{"id":"6d512e05-9f40-44a7-bd56-13153c01d81e","type":"BasicTicker"}},"id":"0dddfd81-01bd-4afc-b025-c8fd18cf59ff","type":"Grid"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"b77f1d78-94cd-4bde-8334-525e311a40cd","type":"BasicTickFormatter"},"plot":{"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},"ticker":{"id":"641e035c-5349-4e27-a5ab-a63fc184b302","type":"BasicTicker"}},"id":"40720d8d-63f0-401d-9946-ec8705c78094","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"50e70e53-a9bb-4e90-b1fe-e19da78df90e","type":"BasicTickFormatter"},"plot":{"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},"ticker":{"id":"2e6b7966-d7f7-4896-9240-f8500fc8de4f","type":"BasicTicker"}},"id":"b35d8d0e-2b1f-43c2-8541-f5ae8052aa2e","type":"LinearAxis"},{"attributes":{},"id":"41862146-5e6e-45e5-b6d0-6ffdf4b5430b","type":"BasicTickFormatter"},{"attributes":{},"id":"9134f5d5-934b-450d-9245-a889b1a74d08","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},{"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"}],[{"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},{"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"}]]},"id":"98ebe74a-3ab7-46e5-8ab3-36cc3ac234e2","type":"GridPlot"},{"attributes":{},"id":"0356b82d-9df6-4a0a-807f-e2d7acc18850","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"0356b82d-9df6-4a0a-807f-e2d7acc18850","type":"BasicTickFormatter"},"plot":{"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"},"ticker":{"id":"2b8e6625-9dac-4adc-b971-4b557c0b2ebd","type":"BasicTicker"}},"id":"9242133a-b85e-4e2f-9fd8-230abb3a8654","type":"LinearAxis"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"2cb19ac5-7fd0-4c91-8048-da434c8fc42a","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-0.5,1.8333333333333335,4.166666666666667,6.5,8.833333333333334,11.166666666666668,13.5,15.833333333333336,18.166666666666668,20.5],"y":[2.75,3.916666666666667,5.083333333333334,6.25,7.416666666666667,8.583333333333334,9.75,10.916666666666668,12.083333333333334,13.25]}},"id":"f4407ab6-7684-45d3-bc51-da9dcc099dec","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"},"ticker":{"id":"2b8e6625-9dac-4adc-b971-4b557c0b2ebd","type":"BasicTicker"}},"id":"c3119bf8-d5f1-453a-87fe-415b48e5e2e6","type":"Grid"},{"attributes":{},"id":"6d512e05-9f40-44a7-bd56-13153c01d81e","type":"BasicTicker"},{"attributes":{},"id":"50623bfe-a6b3-47bc-ba3d-5ad473c0778f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8fd724a6-63da-4d30-9ee9-0877a1b85332","type":"ColumnDataSource"},"glyph":{"id":"a09933a1-c9dd-4126-bb4d-52fc5302ac3b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c427364e-666f-476f-973d-2c040550c2b1","type":"GlyphRenderer"},{"attributes":{},"id":"5c30cb19-0bd7-4ce4-af71-2d8a83dd1fdb","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"b5016d06-79da-4629-80cf-322b4c4830fb","type":"Circle"},{"attributes":{"data_source":{"id":"8fd724a6-63da-4d30-9ee9-0877a1b85332","type":"ColumnDataSource"},"glyph":{"id":"ad246742-f662-4f88-b460-f9ef22245a73","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"51e278bb-d30f-4bf8-976d-98cceb9faec0","type":"GlyphRenderer"},{"attributes":{},"id":"c7ffde25-b999-4b4a-8dc6-b6d8da784225","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["yi","xiv","yiii","xi","yiv","xiii","xii","yii"],"data":{"xi":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xii":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xiii":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xiv":[8.0,8.0,8.0,8.0,8.0,8.0,8.0,19.0,8.0,8.0,8.0],"yi":[8.04,6.95,7.58,8.81,8.33,9.96,7.24,4.26,10.84,4.82,5.68],"yii":[9.14,8.14,8.74,8.77,9.26,8.1,6.13,3.1,9.13,7.26,4.74],"yiii":[7.46,6.77,12.74,7.11,7.81,8.84,6.08,5.39,8.15,6.42,5.73],"yiv":[6.58,5.76,7.71,8.84,8.47,7.04,5.25,12.5,5.56,7.91,6.89]}},"id":"8fd724a6-63da-4d30-9ee9-0877a1b85332","type":"ColumnDataSource"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5c30cb19-0bd7-4ce4-af71-2d8a83dd1fdb","type":"BasicTickFormatter"},"plot":{"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"},"ticker":{"id":"6d512e05-9f40-44a7-bd56-13153c01d81e","type":"BasicTicker"}},"id":"7af7c909-d3b9-400b-b33e-ff9da8cb95f4","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"ad246742-f662-4f88-b460-f9ef22245a73","type":"Circle"},{"attributes":{"plot":{"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"},"ticker":{"id":"49ec39aa-050e-457e-8888-db7a655b3aed","type":"BasicTicker"}},"id":"23c792bf-4552-47b8-8f9f-ef786002a155","type":"Grid"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"1a5e8168-80f4-4849-8907-678c4265a625","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"5e7cc842-6d92-4a77-ad0c-47e73d367288","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"9134f5d5-934b-450d-9245-a889b1a74d08","type":"BasicTickFormatter"},"plot":{"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},"ticker":{"id":"11e4ddad-3f8c-44d8-a12c-62c2119f98d9","type":"BasicTicker"}},"id":"79503da1-2144-4fd8-9689-fb72571f04bb","type":"LinearAxis"},{"attributes":{},"id":"e0dee083-aac8-4b58-99d9-c518ed63f8af","type":"ToolEvents"},{"attributes":{"data_source":{"id":"8fd724a6-63da-4d30-9ee9-0877a1b85332","type":"ColumnDataSource"},"glyph":{"id":"b5016d06-79da-4629-80cf-322b4c4830fb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"412b423a-bd22-4d61-916f-78725b4f254f","type":"GlyphRenderer"},{"attributes":{},"id":"02fe3673-a4d6-4aa0-b99d-3dd11e32e443","type":"ToolEvents"},{"attributes":{},"id":"c6cb01c0-c52e-46ed-bece-9194dc6c07ad","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ac04927-d7b5-4878-b76d-5dec8c9c5515","type":"Line"},{"attributes":{"data_source":{"id":"f4407ab6-7684-45d3-bc51-da9dcc099dec","type":"ColumnDataSource"},"glyph":{"id":"1b96af33-e088-4690-a983-2c725975761e","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e40087d1-b640-47d0-b06c-988e10ea4769","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"7af7c909-d3b9-400b-b33e-ff9da8cb95f4","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"14b84f39-bb51-4a79-a2d4-9410260396d8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7af7c909-d3b9-400b-b33e-ff9da8cb95f4","type":"LinearAxis"},{"id":"14b84f39-bb51-4a79-a2d4-9410260396d8","type":"LinearAxis"},{"id":"0dddfd81-01bd-4afc-b025-c8fd18cf59ff","type":"Grid"},{"id":"f519ecc6-7e85-4c0c-9f52-acee43efd5a0","type":"Grid"},{"id":"bc4242a8-b828-433b-9b62-a26e1ff27530","type":"GlyphRenderer"},{"id":"fffebb43-f404-46ed-bcb3-b014e0284d19","type":"GlyphRenderer"}],"title":"II","tool_events":{"id":"c7ffde25-b999-4b4a-8dc6-b6d8da784225","type":"ToolEvents"},"x_range":{"id":"1a5e8168-80f4-4849-8907-678c4265a625","type":"Range1d"},"y_range":{"id":"2cb19ac5-7fd0-4c91-8048-da434c8fc42a","type":"Range1d"}},"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"},{"attributes":{},"id":"977ee60c-9910-4b1a-9004-582a4f2036c9","type":"BasicTicker"},{"attributes":{},"id":"2b8e6625-9dac-4adc-b971-4b557c0b2ebd","type":"BasicTicker"},{"attributes":{},"id":"2e6b7966-d7f7-4896-9240-f8500fc8de4f","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"41862146-5e6e-45e5-b6d0-6ffdf4b5430b","type":"BasicTickFormatter"},"plot":{"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"},"ticker":{"id":"50623bfe-a6b3-47bc-ba3d-5ad473c0778f","type":"BasicTicker"}},"id":"14b84f39-bb51-4a79-a2d4-9410260396d8","type":"LinearAxis"},{"attributes":{},"id":"5fe07bba-e92c-43f5-871e-19bf4b5257d8","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"b35d8d0e-2b1f-43c2-8541-f5ae8052aa2e","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"e482588d-029f-466d-91ee-04be6a0a9a76","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b35d8d0e-2b1f-43c2-8541-f5ae8052aa2e","type":"LinearAxis"},{"id":"e482588d-029f-466d-91ee-04be6a0a9a76","type":"LinearAxis"},{"id":"5a82ff51-07f6-4b63-b37c-c9dfc2b39c34","type":"Grid"},{"id":"c3dc8b59-6d80-4781-bdd2-f1eb7f7cdd48","type":"Grid"},{"id":"e40087d1-b640-47d0-b06c-988e10ea4769","type":"GlyphRenderer"},{"id":"51e278bb-d30f-4bf8-976d-98cceb9faec0","type":"GlyphRenderer"}],"title":"I","tool_events":{"id":"02fe3673-a4d6-4aa0-b99d-3dd11e32e443","type":"ToolEvents"},"x_range":{"id":"1a5e8168-80f4-4849-8907-678c4265a625","type":"Range1d"},"y_range":{"id":"2cb19ac5-7fd0-4c91-8048-da434c8fc42a","type":"Range1d"}},"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},{"attributes":{},"id":"50e70e53-a9bb-4e90-b1fe-e19da78df90e","type":"BasicTickFormatter"},{"attributes":{},"id":"49ec39aa-050e-457e-8888-db7a655b3aed","type":"BasicTicker"},{"attributes":{"plot":{"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},"ticker":{"id":"11e4ddad-3f8c-44d8-a12c-62c2119f98d9","type":"BasicTicker"}},"id":"ba55428a-f018-4f0b-a8b0-327c10d88af4","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"462a6ee1-0f02-450d-9919-23837cd89f6e","type":"Plot"},"ticker":{"id":"50623bfe-a6b3-47bc-ba3d-5ad473c0778f","type":"BasicTicker"}},"id":"f519ecc6-7e85-4c0c-9f52-acee43efd5a0","type":"Grid"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5fe07bba-e92c-43f5-871e-19bf4b5257d8","type":"BasicTickFormatter"},"plot":{"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"},"ticker":{"id":"49ec39aa-050e-457e-8888-db7a655b3aed","type":"BasicTicker"}},"id":"55d512fa-be3e-44f7-946f-558f99e12cda","type":"LinearAxis"},{"attributes":{},"id":"641e035c-5349-4e27-a5ab-a63fc184b302","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8fd724a6-63da-4d30-9ee9-0877a1b85332","type":"ColumnDataSource"},"glyph":{"id":"5e7cc842-6d92-4a77-ad0c-47e73d367288","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fffebb43-f404-46ed-bcb3-b014e0284d19","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f4407ab6-7684-45d3-bc51-da9dcc099dec","type":"ColumnDataSource"},"glyph":{"id":"4ac04927-d7b5-4878-b76d-5dec8c9c5515","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0132cb17-2a91-442b-91f3-f2314b7ce21d","type":"GlyphRenderer"},{"attributes":{},"id":"40f3bfa8-6beb-4c32-b21f-ef88ad5c541b","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b0ea466-ffbe-480a-9328-00090e8b7a18","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"c6cb01c0-c52e-46ed-bece-9194dc6c07ad","type":"BasicTickFormatter"},"plot":{"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},"ticker":{"id":"977ee60c-9910-4b1a-9004-582a4f2036c9","type":"BasicTicker"}},"id":"e482588d-029f-466d-91ee-04be6a0a9a76","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f4407ab6-7684-45d3-bc51-da9dcc099dec","type":"ColumnDataSource"},"glyph":{"id":"0b0ea466-ffbe-480a-9328-00090e8b7a18","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b716a7d6-0dde-4eef-bd3a-d7ea64e4d93e","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"79503da1-2144-4fd8-9689-fb72571f04bb","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"40720d8d-63f0-401d-9946-ec8705c78094","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"79503da1-2144-4fd8-9689-fb72571f04bb","type":"LinearAxis"},{"id":"40720d8d-63f0-401d-9946-ec8705c78094","type":"LinearAxis"},{"id":"ba55428a-f018-4f0b-a8b0-327c10d88af4","type":"Grid"},{"id":"5f6baf23-77e2-4ee0-ac5c-cd4087d7d9e4","type":"Grid"},{"id":"0132cb17-2a91-442b-91f3-f2314b7ce21d","type":"GlyphRenderer"},{"id":"412b423a-bd22-4d61-916f-78725b4f254f","type":"GlyphRenderer"}],"title":"III","tool_events":{"id":"e0dee083-aac8-4b58-99d9-c518ed63f8af","type":"ToolEvents"},"x_range":{"id":"1a5e8168-80f4-4849-8907-678c4265a625","type":"Range1d"},"y_range":{"id":"2cb19ac5-7fd0-4c91-8048-da434c8fc42a","type":"Range1d"}},"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"63ad3575-7e87-4d19-9501-e8c25af4769c","type":"Line"},{"attributes":{"plot":{"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},"ticker":{"id":"2e6b7966-d7f7-4896-9240-f8500fc8de4f","type":"BasicTicker"}},"id":"5a82ff51-07f6-4b63-b37c-c9dfc2b39c34","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b96af33-e088-4690-a983-2c725975761e","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"a09933a1-c9dd-4126-bb4d-52fc5302ac3b","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"37331242-d555-42e7-9043-3fdc0868ea07","type":"Plot"},"ticker":{"id":"977ee60c-9910-4b1a-9004-582a4f2036c9","type":"BasicTicker"}},"id":"c3dc8b59-6d80-4781-bdd2-f1eb7f7cdd48","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"9242900b-4d3b-4213-8e37-93a3337014a9","type":"Plot"},"ticker":{"id":"641e035c-5349-4e27-a5ab-a63fc184b302","type":"BasicTicker"}},"id":"5f6baf23-77e2-4ee0-ac5c-cd4087d7d9e4","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"55d512fa-be3e-44f7-946f-558f99e12cda","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"9242133a-b85e-4e2f-9fd8-230abb3a8654","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"55d512fa-be3e-44f7-946f-558f99e12cda","type":"LinearAxis"},{"id":"9242133a-b85e-4e2f-9fd8-230abb3a8654","type":"LinearAxis"},{"id":"23c792bf-4552-47b8-8f9f-ef786002a155","type":"Grid"},{"id":"c3119bf8-d5f1-453a-87fe-415b48e5e2e6","type":"Grid"},{"id":"b716a7d6-0dde-4eef-bd3a-d7ea64e4d93e","type":"GlyphRenderer"},{"id":"c427364e-666f-476f-973d-2c040550c2b1","type":"GlyphRenderer"}],"title":"IV","tool_events":{"id":"40f3bfa8-6beb-4c32-b21f-ef88ad5c541b","type":"ToolEvents"},"x_range":{"id":"1a5e8168-80f4-4849-8907-678c4265a625","type":"Range1d"},"y_range":{"id":"2cb19ac5-7fd0-4c91-8048-da434c8fc42a","type":"Range1d"}},"id":"b8e535df-a7b6-4cec-a36a-7fcfa0ea3ce8","type":"Plot"},{"attributes":{},"id":"b77f1d78-94cd-4bde-8334-525e311a40cd","type":"BasicTickFormatter"},{"attributes":{},"id":"11e4ddad-3f8c-44d8-a12c-62c2119f98d9","type":"BasicTicker"}],"root_ids":["98ebe74a-3ab7-46e5-8ab3-36cc3ac234e2"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"a01472d4-18ec-454d-b386-365827fe2326","elementid":"079a3926-1548-4aed-a883-45313ba04118","modelid":"98ebe74a-3ab7-46e5-8ab3-36cc3ac234e2"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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