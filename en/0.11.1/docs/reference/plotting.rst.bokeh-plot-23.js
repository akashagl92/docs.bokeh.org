
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
  };var element = document.getElementById("d2110fbc-0c19-4488-bd38-16b05b88c7d8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd2110fbc-0c19-4488-bd38-16b05b88c7d8' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"4050b7f9-0480-43ad-be9d-4cc5b635634f":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6885a93-7447-4905-8a83-92950bed452c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"8ef1e33b-eb83-4492-ba8f-a8da4c9ec2cf","type":"HelpTool"},{"attributes":{"below":[{"id":"62518b92-2a5a-4087-a277-7e77cb1a54dd","type":"LinearAxis"}],"left":[{"id":"c648d235-ab4b-4e58-aaef-322a9cc19c55","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"62518b92-2a5a-4087-a277-7e77cb1a54dd","type":"LinearAxis"},{"id":"6b5162a2-d22f-419a-a455-0d4500ddfbff","type":"Grid"},{"id":"c648d235-ab4b-4e58-aaef-322a9cc19c55","type":"LinearAxis"},{"id":"7cf4aa17-3c8a-45cb-8194-05668832a603","type":"Grid"},{"id":"a6885a93-7447-4905-8a83-92950bed452c","type":"BoxAnnotation"},{"id":"64132604-4b1e-42d8-b536-b1557f29b5b5","type":"GlyphRenderer"}],"tool_events":{"id":"2b798c46-4835-4dc7-a531-7c0da926f90d","type":"ToolEvents"},"tools":[{"id":"e2988f3c-0e8a-4448-bdef-cf800c77d938","type":"PanTool"},{"id":"e0658c7f-773f-4b66-b3dc-240930656df3","type":"WheelZoomTool"},{"id":"f97f9570-8d08-4f30-b627-e8a0f886fd8e","type":"BoxZoomTool"},{"id":"5b5cdbb2-33ca-45e4-ad16-858166d13c35","type":"PreviewSaveTool"},{"id":"e68fce17-d0ed-437a-826d-542d2f182b4c","type":"ResizeTool"},{"id":"615eaf56-c678-4259-a281-7cb88c880ee0","type":"ResetTool"},{"id":"8ef1e33b-eb83-4492-ba8f-a8da4c9ec2cf","type":"HelpTool"}],"x_range":{"id":"ce8854a7-41d4-4ed3-8e8a-9911698219a6","type":"DataRange1d"},"y_range":{"id":"8510e33d-7ca4-4a15-9743-4dad7aecf453","type":"DataRange1d"}},"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"a6885a93-7447-4905-8a83-92950bed452c","type":"BoxAnnotation"},"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"f97f9570-8d08-4f30-b627-e8a0f886fd8e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee5b2830-310c-4bb5-a407-f169d844fc95","type":"X"},{"attributes":{"callback":null},"id":"ce8854a7-41d4-4ed3-8e8a-9911698219a6","type":"DataRange1d"},{"attributes":{},"id":"9c779a21-8a07-4f9b-9788-f2dd9cbdf987","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"0cd8c942-62ff-4b76-916f-75536efc25d7","type":"ColumnDataSource"},{"attributes":{},"id":"45ba77f8-0cba-4920-b17a-f3a7d48c737f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"e2988f3c-0e8a-4448-bdef-cf800c77d938","type":"PanTool"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c779a21-8a07-4f9b-9788-f2dd9cbdf987","type":"BasicTicker"}},"id":"6b5162a2-d22f-419a-a455-0d4500ddfbff","type":"Grid"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"615eaf56-c678-4259-a281-7cb88c880ee0","type":"ResetTool"},{"attributes":{},"id":"2b798c46-4835-4dc7-a531-7c0da926f90d","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e529235-0871-465f-bbbd-d4a13075f648","type":"X"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"e0658c7f-773f-4b66-b3dc-240930656df3","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"45ba77f8-0cba-4920-b17a-f3a7d48c737f","type":"BasicTickFormatter"},"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"73af6176-0480-42a2-8802-4b341dbd13e0","type":"BasicTicker"}},"id":"c648d235-ab4b-4e58-aaef-322a9cc19c55","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0cd8c942-62ff-4b76-916f-75536efc25d7","type":"ColumnDataSource"},"glyph":{"id":"4e529235-0871-465f-bbbd-d4a13075f648","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"ee5b2830-310c-4bb5-a407-f169d844fc95","type":"X"},"selection_glyph":null},"id":"64132604-4b1e-42d8-b536-b1557f29b5b5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"73af6176-0480-42a2-8802-4b341dbd13e0","type":"BasicTicker"}},"id":"7cf4aa17-3c8a-45cb-8194-05668832a603","type":"Grid"},{"attributes":{},"id":"3fc644d0-43f0-45d7-9d98-2a904d631b34","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3fc644d0-43f0-45d7-9d98-2a904d631b34","type":"BasicTickFormatter"},"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c779a21-8a07-4f9b-9788-f2dd9cbdf987","type":"BasicTicker"}},"id":"62518b92-2a5a-4087-a277-7e77cb1a54dd","type":"LinearAxis"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"5b5cdbb2-33ca-45e4-ad16-858166d13c35","type":"PreviewSaveTool"},{"attributes":{},"id":"73af6176-0480-42a2-8802-4b341dbd13e0","type":"BasicTicker"},{"attributes":{"plot":{"id":"33d66948-8e12-48c1-ae85-d43cc887cbd8","subtype":"Figure","type":"Plot"}},"id":"e68fce17-d0ed-437a-826d-542d2f182b4c","type":"ResizeTool"},{"attributes":{"callback":null},"id":"8510e33d-7ca4-4a15-9743-4dad7aecf453","type":"DataRange1d"}],"root_ids":["33d66948-8e12-48c1-ae85-d43cc887cbd8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"4050b7f9-0480-43ad-be9d-4cc5b635634f","elementid":"d2110fbc-0c19-4488-bd38-16b05b88c7d8","modelid":"33d66948-8e12-48c1-ae85-d43cc887cbd8"}];
          
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